// components/ScanData.tsx
import React from "react";

// types.ts
interface Port {
    protocol: string;
    portid: string;
    state: string;
    service: {
      name: string;
    };
  }
  
interface Runtime {
    summary: string;
    elapsed: string;
  }
  
interface Scan {
    [ip: string]: {
      ports: Port[];
      runtime: Runtime;
      summary: string;
      elapsed: string;
    };
  }
  

interface ScanDataProps {
  data: Scan[];
}

const ScanData: React.FC<ScanDataProps> = ({ data }) => {
  return (
    <div>
      {data.map((scan, index) => {
        const ip = Object.keys(scan)[0];
        const scanInfo = scan[ip];
        console.log(scanInfo)
        
        return (
          <div key={index} className="scan">
            <h2>IP Address: {ip}</h2>
            <div>
              <h3>Ports</h3>
              <ul>
                {scanInfo.ports.map((port, idx) => (
                  <li key={idx} className="port">
                    <p>Port ID: {port.portid}</p>
                    <p>Protocol: {port.protocol}</p>
                    <p>State: {port.state}</p>
                    <p>Service: {port.service.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="runtime">
              <p>
                Scan Summary: {scan.runtime.summary} | Elapsed Time:{" "}
                {scan.runtime.elapsed} seconds
              </p>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        .scan {
          border: 1px solid #ccc;
          padding: 1rem;
          background-color: #ffffff;
          color: #000000;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          border-radius: 8px;
        }
        .port {
          margin: 0.5rem 0;
        }
      `}</style>
    </div>
  );
};

export default ScanData;
