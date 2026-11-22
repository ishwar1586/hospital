export const printContent = (
  title,
  htmlContent
) => {

  const printWindow =
    window.open(
      "",
      "_blank",
      "width=1200,height=900"
    );

  if (!printWindow) {
    alert(
      "Please allow popups to print."
    );
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>

    <html>

      <head>

        <title>
          ${title}
        </title>

        <style>

          *{
            box-sizing:border-box;
          }

          body{
            font-family:
              Arial,
              Helvetica,
              sans-serif;

            margin:0;

            padding:30px;

            color:#111827;

            background:#ffffff;
          }

          .hospital-header{
            text-align:center;

            margin-bottom:30px;

            border-bottom:
              2px solid #e5e7eb;

            padding-bottom:20px;
          }

          .hospital-header h1{
            margin:0;

            font-size:28px;
          }

          .hospital-header p{
            margin-top:8px;

            color:#64748b;
          }

          .slip-section{
            border:
              1px solid #e5e7eb;

            border-radius:10px;

            padding:20px;

            margin-bottom:20px;
          }

          .slip-section h3{
            margin-top:0;

            margin-bottom:16px;

            color:#0f172a;
          }

          .slip-grid{
            display:grid;

            grid-template-columns:
              repeat(2,1fr);

            gap:18px;
          }

          .slip-grid div{
            display:flex;

            flex-direction:column;
          }

          .slip-grid label{
            font-size:12px;

            color:#64748b;

            margin-bottom:4px;
          }

          .slip-grid span{
            font-size:14px;

            font-weight:600;

            color:#111827;
          }

          .signature-section{
            display:flex;

            justify-content:space-between;

            margin-top:60px;
          }

          .signature-section div{
            text-align:center;

            width:250px;
          }

          .signature-section strong{
            display:block;

            margin-top:8px;
          }

          @media print {

            body{
              padding:20px;
            }

            .slip-section{
              break-inside:avoid;
            }

          }

        </style>

      </head>

      <body>

        ${htmlContent}

      </body>

    </html>
  `);

  printWindow.document.close();

  printWindow.focus();

  setTimeout(() => {

    printWindow.print();

  }, 500);

};