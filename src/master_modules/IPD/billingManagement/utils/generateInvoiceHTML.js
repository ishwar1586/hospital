const generateInvoiceHTML = (
  patient
) => {

  return `

    <html>

      <head>

        <title>
          Invoice
        </title>

        <style>

          body{
            font-family: Arial, sans-serif;
            padding:40px;
          }

          .header{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:30px;
          }

          .hospital-name{
            font-size:28px;
            font-weight:bold;
          }

          .invoice-badge{
            background:#2563eb;
            color:white;
            padding:10px 18px;
            border-radius:8px;
          }

          .section{
            margin-top:20px;
          }

          .section h3{
            margin-bottom:10px;
          }

          table{
            width:100%;
            border-collapse:collapse;
            margin-top:15px;
          }

          table th,
          table td{
            border:1px solid #ddd;
            padding:12px;
            text-align:left;
          }

          table th{
            background:#f5f5f5;
          }

          .summary{
            margin-top:25px;
            display:flex;
            gap:20px;
          }

          .card{
            flex:1;
            border:1px solid #ddd;
            border-radius:10px;
            padding:15px;
          }

        </style>

      </head>

      <body>

        <div class="header">

          <div>

            <div class="hospital-name">
              City Care Hospital
            </div>

            <div>
              Gorakhpur, Uttar Pradesh
            </div>

          </div>

          <div class="invoice-badge">
            TAX INVOICE
          </div>

        </div>

        <div class="section">

          <h3>
            Patient Information
          </h3>

          <p>
            <strong>Name:</strong>
            ${patient.patientName}
          </p>

          <p>
            <strong>Bill No:</strong>
            ${patient.billNo}
          </p>

          <p>
            <strong>IPD No:</strong>
            ${patient.ipdNo}
          </p>

          <p>
            <strong>Doctor:</strong>
            ${patient.doctor}
          </p>

        </div>

        <table>

          <thead>

            <tr>

              <th>
                Description
              </th>

              <th>
                Amount
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Total Bill Amount</td>
              <td>
                ₹${patient.billAmount}
              </td>
            </tr>

            <tr>
              <td>Paid Amount</td>
              <td>
                ₹${patient.paidAmount}
              </td>
            </tr>

            <tr>
              <td>Due Amount</td>
              <td>
                ₹${patient.dueAmount}
              </td>
            </tr>

          </tbody>

        </table>

      </body>

    </html>

  `;

};

export default generateInvoiceHTML;