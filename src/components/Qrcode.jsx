import React, { useState } from "react";

//use state and events

export const Qrcode = () => {
  const [img, setImg] = useState("");
  const [Loading, setLoading] = useState(false);
  const [Qrcode, setQrCode] = useState("www.jawahar.com");
  const [qrSize, setQrSize] = useState("150");

  async function generateQr() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}/${qrSize}&data=${encodeURIComponent(
        Qrcode
      )}`;
      setImg(url);
    } catch (error) {
      console.log("Enter generating QR code", error);
    } finally {
      setLoading(false);
    }
}
    function downloadQr(){
        fetch(img)
        .then((response)=> response.blob())
        .then((blob)=>{
            const link=document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="Qr.png"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        })
        .catch((error)=>{
            console.error("Error Downloading QR Code ",error);
        });
    }
  return (
    <div className="app-container">
      <h1>QR-CODE GENERATOR</h1>
      {Loading && <p>Loading...</p>}
      {img && <img src={img} alt="Qr-code" className="Qr-code-image" />}
      <div>
        <label htmlFor="dataInputs" className="input-label">
          Data For Qr-Code
        </label>
        <input
          type="text"
          id="dataInput"
          value={Qrcode}
          placeholder="Enter Data For Qr-code"
          onChange={(e) => setQrCode(e.target.value)}
        />
        <label htmlFor="SizeInputs" className="input-label">
          Enter Qr-Code Image size
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter Your Image-Size"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
        <button
          className="generate-btn"
          disabled={Loading}
          onClick={generateQr}
        >
          Generate Qr-Code
        </button>
        <button className="download-btn" onClick={downloadQr}>Download Qr-Code</button>
      </div>
    </div>
  );
};
