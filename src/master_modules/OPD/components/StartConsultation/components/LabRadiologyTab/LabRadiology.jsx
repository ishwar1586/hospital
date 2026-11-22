
import React, { useCallback, useEffect, useMemo, useState } from "react";

import TestSearch from "./components/TestSearch/TestSearch";
import TestSelection from "./components/TestSelection/TestSelection";
import SelectedTests from "./components/SelectedTests/SelectedTests";
import ConsultationFooter from "@/master_modules/OPD/components/StartConsultation/components/ConsultationFooter/ConsultationFooter.jsx";

import { labRadiologyConfig } from "../../config/labRadiology.config";
import { labRadiologyTabsConfig } from "../../config/labRadiologyTabs.config";
import { selectedTestsInitialState } from "../../mock/selectedTests.mock";

import {
  searchTestsService,
  saveLabRadiologyOrderService,
} from "../../services/labRadiology.service";

import { validateLabRadiologyOrder } from "../../config/labRadiologyValidation.config";

import "./LabRadiology.css";

const LabRadiologyTab = ({
  patient = {},
  doctor = {},
  consultation = {},

  initialTests = [],
  initialClinicalNote = "",

  onBack,
  onNext,
  onSaveDraft,
  onChange,

  disabled = false,
  saving = false,
}) => {
  const [activeTab, setActiveTab] = useState(
    labRadiologyTabsConfig.defaultTab
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [availableTests, setAvailableTests] = useState([]);
  const [selectedTests, setSelectedTests] = useState(
    () =>
      Array.isArray(initialTests)
        ? initialTests
        : selectedTestsInitialState.tests
  );

  const [clinicalNote, setClinicalNote] = useState(
    initialClinicalNote || selectedTestsInitialState.clinicalNote
  );

  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const isDisabled = disabled || saving || isSaving;

  const activeTabConfig = useMemo(
    () =>
      labRadiologyTabsConfig.tabs.find(
        (tab) => tab.id === activeTab
      ),
    [activeTab]
  );

  const getPatientId = useCallback(
    () => patient.id || patient.patientId || patient._id || "",
    [patient]
  );

  const getDoctorId = useCallback(
    () => doctor.id || doctor.doctorId || doctor._id || "",
    [doctor]
  );

  const getConsultationId = useCallback(
    () =>
      consultation.id ||
      consultation.consultationId ||
      consultation._id ||
      "",
    [consultation]
  );

  // Notify parent whenever the order changes.
  useEffect(() => {
    onChange?.({
      tests: selectedTests,
      clinicalNote,
      activeTab,
    });
  }, [selectedTests, clinicalNote, activeTab, onChange]);

  // Load tests for the currently active tab.
  const loadTests = useCallback(
    async (term = searchTerm, tab = activeTab) => {
      setLoading(true);
      setError("");
      setSuccessMessage("");

      try {
        const result = await searchTestsService(term, tab);

        setAvailableTests(
          Array.isArray(result) ? result : []
        );
      } catch (err) {
        console.error("Lab/Radiology test loading failed:", err);

        setAvailableTests([]);
        setError(
          labRadiologyConfig.notifications.saveError
        );
      } finally {
        setLoading(false);
      }
    },
    [searchTerm, activeTab]
  );

  // Load tests when the active tab changes.
  useEffect(() => {
    loadTests("", activeTab);
  }, [activeTab]);

  const handleSearch = useCallback(
    (value) => {
      setSearchTerm(value);
      loadTests(value, activeTab);
    },
    [activeTab, loadTests]
  );

  const handleTabChange = useCallback(
    (tabId) => {
      const isValidTab = labRadiologyTabsConfig.tabs.some(
        (tab) => tab.id === tabId && tab.enabled
      );

      if (!isValidTab || isDisabled || tabId === activeTab) {
        return;
      }

      setActiveTab(tabId);
      setSearchTerm("");
      setError("");
      setSuccessMessage("");
    },
    [activeTab, isDisabled]
  );

  // Add or remove an individual test.
  const handleTestChange = useCallback(
    (test, checked) => {
      if (isDisabled || !test?.id) return;

      setError("");
      setSuccessMessage("");

      setSelectedTests((previousTests) => {
        if (checked) {
          const alreadyExists = previousTests.some(
            (item) => item.id === test.id
          );

          if (alreadyExists) return previousTests;

          return [...previousTests, test];
        }

        return previousTests.filter(
          (item) => item.id !== test.id
        );
      });
    },
    [isDisabled]
  );

  // Select or deselect all tests currently visible.
  const handleSelectAll = useCallback(
    (checked, visibleTests = []) => {
      if (isDisabled) return;

      setError("");
      setSuccessMessage("");

      setSelectedTests((previousTests) => {
        const visibleIds = new Set(
          visibleTests.map((test) => test.id)
        );

        if (checked) {
          const existingIds = new Set(
            previousTests.map((test) => test.id)
          );

          const newTests = visibleTests.filter(
            (test) =>
              test?.id && !existingIds.has(test.id)
          );

          return [...previousTests, ...newTests];
        }

        return previousTests.filter(
          (test) => !visibleIds.has(test.id)
        );
      });
    },
    [isDisabled]
  );

  // Remove test from selected list.
  const handleRemoveTest = useCallback(
    (test) => {
      if (isDisabled || !test?.id) return;

      setSelectedTests((previousTests) =>
        previousTests.filter(
          (item) => item.id !== test.id
        )
      );

      setError("");
      setSuccessMessage(
        labRadiologyConfig.notifications.testRemoved
      );
    },
    [isDisabled]
  );

  const handleClinicalNoteChange = useCallback(
    (value) => {
      if (isDisabled) return;

      setClinicalNote(value);
      setError("");
      setSuccessMessage("");
    },
    [isDisabled]
  );

  // Create a consistent order payload.
  const createOrderPayload = useCallback(
    (status) => ({
      patientId: getPatientId(),
      patientName: patient.name || patient.patientName || "",
      doctorId: getDoctorId(),
      doctorName: doctor.name || doctor.doctorName || "",
      consultationId: getConsultationId(),
      tests: selectedTests,
      clinicalNote: clinicalNote.trim(),
      status,
    }),
    [
      patient,
      doctor,
      selectedTests,
      clinicalNote,
      getPatientId,
      getDoctorId,
      getConsultationId,
    ]
  );

  const handleSaveDraft = useCallback(async () => {
    if (isDisabled) return;

    setIsSaving(true);
    setError("");
    setSuccessMessage("");

    try {
      const payload = createOrderPayload("draft");

      const result = await saveLabRadiologyOrderService(payload);

      onSaveDraft?.(result);

      setSuccessMessage(
        labRadiologyConfig.notifications.saveSuccess
      );
    } catch (err) {
      console.error("Lab/Radiology draft save failed:", err);

      setError(
        labRadiologyConfig.notifications.saveError
      );
    } finally {
      setIsSaving(false);
    }
  }, [
    isDisabled,
    createOrderPayload,
    onSaveDraft,
  ]);

  const handleNext = useCallback(async () => {
    if (isDisabled) return;

    setError("");
    setSuccessMessage("");

    const payload = createOrderPayload("ordered");
    const validation = validateLabRadiologyOrder(payload);

    if (!validation.isValid) {
      setError(
        validation.errors.tests ||
        validation.errors.invalidTest ||
        validation.errors.duplicateTest ||
        validation.errors.clinicalNote ||
        ""
      );

      return;
    }

    setIsSaving(true);

    try {
      const result = await saveLabRadiologyOrderService(payload);

      onNext?.(result);
    } catch (err) {
      console.error("Lab/Radiology order save failed:", err);

      setError(
        labRadiologyConfig.notifications.saveError
      );
    } finally {
      setIsSaving(false);
    }
  }, [
    isDisabled,
    createOrderPayload,
    onNext,
  ]);

  const handleBack = useCallback(() => {
    if (!isDisabled) {
      onBack?.();
    }
  }, [isDisabled, onBack]);

  return (
    <section className="lab-radiology-tab">
      <div className="lab-radiology-tab__header">
        <div className="lab-radiology-tab__heading">
          <h2 className="lab-radiology-tab__title">
            {labRadiologyConfig.page.title}
          </h2>
        </div>
      </div>

      <div className="lab-radiology-tab__search">
        <TestSearch
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
          loading={loading}
          disabled={isDisabled}
        />
      </div>

      <div className="lab-radiology-tab__layout">
        <div className="lab-radiology-tab__selection">
          <TestSelection
            activeTab={activeTab}
            onTabChange={handleTabChange}
            tests={availableTests}
            selectedTests={selectedTests}
            onTestChange={handleTestChange}
            onSelectAll={handleSelectAll}
            loading={loading}
            disabled={isDisabled}
          />
        </div>

        <div className="lab-radiology-tab__selected">
          <SelectedTests
            tests={selectedTests}
            onRemove={handleRemoveTest}
            clinicalNote={clinicalNote}
            onClinicalNoteChange={handleClinicalNoteChange}
            disabled={isDisabled}
          />
        </div>
      </div>

      {(error || successMessage) && (
        <div
          className={`lab-radiology-tab__feedback ${
            error
              ? "lab-radiology-tab__feedback--error"
              : "lab-radiology-tab__feedback--success"
          }`}
          role="status"
          aria-live="polite"
        >
          {error || successMessage}
        </div>
      )}

      <ConsultationFooter
        tab="lab-radiology"
        onBack={handleBack}
        onSaveDraft={handleSaveDraft}
        onNext={handleNext}
        disabled={disabled || saving}
        loading={isSaving}
      />
    </section>
  );
};

export default LabRadiologyTab;
