import {profileData} from "./data";
import './style.css'


function ProfileCard(){
    return (
        <div className="main-container">
            <div className="header">
                <h2 className="logo">Brooklin
                <span className="nine">NINE-NINE</span></h2>
            </div>
            
            {profileData.map((profile, index) => (
                <div key={index} className="person-data">
                    <img src={profile.img} alt={profile.name_person} width={250}/>
                    <div className="text-content">
                        <p className="person-name">{profile.name_person}</p>
                        <p className="job">{profile.job}</p>
                        <p className="hobby">{profile.hobby}</p>
                    </div>
                </div>
            ))}
        
        </div>

)};

export default ProfileCard;
