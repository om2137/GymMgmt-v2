'use client'
import React, { useState } from "react";
import crypto from "crypto"; // Node.js built-in crypto module

export const AirpayKeyGenerator = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const generatePrivateKey = () => {
    if (!username || !password || !secret) {
      alert("Please enter all values!");
      return;
    }

    // Step 1: Generate Key
    const keyString = `${username}~:~${password}`;
    const key = crypto.createHash("sha256").update(keyString).digest("hex");
    console.log(key)
    // Step 2: Generate Private Key
    const privateKeyString = `${secret}@${username}:|:${password}`;
    const privateKey = crypto.createHash("sha256").update(privateKeyString).digest("hex");

    setPrivateKey(privateKey);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Airpay Private Key Generator</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />
      <input
        type="text"
        placeholder="Secret"
        value={secret}
        onChange={(e) => setSecret(e.target.value)}
        style={{ margin: "5px", padding: "8px" }}
      />
      <button onClick={generatePrivateKey} style={{ margin: "10px", padding: "10px" }}>
        Generate Private Key
      </button>
      {privateKey && (
        <div>
          <h3>Generated Private Key:</h3>
          <textarea readOnly value={privateKey} style={{ width: "80%", height: "60px" }} />
        </div>
      )}
    </div>
  );
};
export const ChecksumGenerator = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [merchantId, setMerchantId] = useState("");
    const [merchantTxnId, setMerchantTxnId] = useState("");
    const [date, setDate] = useState("");
    const [checksum, setChecksum] = useState("");
  
    const generateChecksum = () => {
      if (!username || !password || !merchantId || !date) {
        alert("Please enter all required fields!");
        return;
      }
  
      // Step 1: Generate Key
      const keyString = `${username}~:~${password}`;
      const key = crypto.createHash("sha256").update(keyString).digest("hex");
      console.log(key)
      // Step 2: Generate alldata string
      const alldata = [
        merchantId,
        merchantTxnId,
        '2025-02-25',
      ]
        .filter(Boolean) // Remove empty values
        .join("");
      console.log(alldata)
      // Step 3: Generate Checksum
      const checksum = crypto.createHash("sha256").update(`${key}@${alldata}`).digest("hex");
  
      setChecksum(checksum);
    };
  
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Checksum Generator</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: "5px", padding: "8px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: "5px", padding: "8px" }} />
        <input type="text" placeholder="Merchant ID" value={merchantId} onChange={(e) => setMerchantId(e.target.value)} style={{ margin: "5px", padding: "8px" }} />
        <input type="text" placeholder="Merchant Transaction ID" value={merchantTxnId} onChange={(e) => setMerchantTxnId(e.target.value)} style={{ margin: "5px", padding: "8px" }} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ margin: "5px", padding: "8px" }} />
        <button onClick={generateChecksum} style={{ margin: "10px", padding: "10px" }}>
          Generate Checksum
        </button>
        {checksum && (
          <div>
            <h3>Generated Checksum:</h3>
            <textarea readOnly value={checksum} style={{ width: "80%", height: "60px" }} />
          </div>
        )}
      </div>
    );
  };
  
