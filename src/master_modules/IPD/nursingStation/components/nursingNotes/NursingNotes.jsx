import PersonOutlineOutlinedIcon
from "@mui/icons-material/PersonOutlineOutlined";

import DescriptionOutlinedIcon
from "@mui/icons-material/DescriptionOutlined";

import nursingNotes
from "@/master_modules/IPD/nursingStation/mock/nursingNotes.mock";

import "@/master_modules/IPD/nursingStation/styles/nursingnotes.css";

const NursingNotes = () => {

  return (

    <div className="nursing-notes-card">

      <div className="nursing-notes-header">

        <div className="notes-title">

          <DescriptionOutlinedIcon />

          <h3>
            Recent Nursing Notes
          </h3>

        </div>

        <button>
          View All
        </button>

      </div>

      <div className="notes-list">

        {nursingNotes.map(
          (note) => (

            <div
              key={note.id}
              className="note-row"
            >

              <div className="note-left">

                <div className="note-avatar">

                  <PersonOutlineOutlinedIcon />

                </div>

                <div>

                  <h4>
                    {note.patientName}
                  </h4>

                  <p>
                    {note.room}
                    {" / "}
                    {note.bed}
                  </p>

                </div>

              </div>

              <div className="note-center">

                {note.note}

              </div>

              <div className="note-right">

                <span>
                  {note.time}
                </span>

                <p>
                  {note.nurse}
                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );

};

export default NursingNotes;