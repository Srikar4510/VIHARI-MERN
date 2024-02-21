import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditAgentDetailsMutation } from "../Slices/agentApiSlice";
import AgentNavbar from "../components/UI/AgentNavbar";

const EditAgentProfile = () => {
  const navigate = useNavigate();
  const [editAgentDetails] = useEditAgentDetailsMutation();

  const [agentName, setAgentName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSave = async () => {
    const agentId = localStorage.getItem('agentId');
    try {
      const { data } = await editAgentDetails({ agentId, data: { agentName, email } });
      alert("Profile Updated succesfully"); 
      navigate("/agent/agentProfile");
      window.location.reload();
    } catch (error) {
      console.error("Error editing agent details:", error);
     
    }
  };

  const handleCancel = () => {
    navigate("/agent/agentProfile");
  };

  return (
    <div>
      <AgentNavbar />
      <div className="profile">
        <div className="rightdiv">
          <h1>My Profile</h1>
          <div className="profile-details">
            <div>
              <h2>Name</h2>
              <input
                className="inp-name"
                type="text"
                placeholder="Name"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
              />
            </div>
            <div>
              <h2>Email</h2>
              <input
                className="inp-name"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="cancel-save">
              <button type="submit" onClick={handleCancel}>
                CANCEL
              </button>
              <button type="submit" onClick={handleSave}>
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default EditAgentProfile;
