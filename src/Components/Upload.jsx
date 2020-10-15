import React,{useState} from 'react'
import { useStateValue } from '../StateProvider'
import '../styles/Upload.css'
import firebase from 'firebase'
import {db} from '../firebase'
import {useHistory} from 'react-router-dom'

function Upload() {
    const [{user},dispatch] = useStateValue();
    const history = useHistory();

    function uploadImage(e){
        let allowed_ext = ["image/jpeg","image/jpg","image/png"]
        e.preventDefault();
        var file = e.target.files[0];
       
        
        if(allowed_ext.includes(file.type)){
            var storageRef=firebase.storage().ref("wallpapers/"+file.name)

            //upload file
            var task=storageRef.put(file);

            //update the progress

            task.on('state_changed',function progress(snapshot){
                var progress = document.getElementById("progress");
                var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                progress.value = percentage;
            },
            function error(err){
                    console.log(err);
            },function complete(){
                task.snapshot.ref.getDownloadURL().then(function(downloadURL){
                    let image_data = {"uploader":user.displayName,"url":downloadURL}
                    db.collection("photos").doc("images").update({
                        "photos":firebase.firestore.FieldValue.arrayUnion(image_data)
                    })
                    .then(function() {
                        history.push("/");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });
                })
            }
            )



        }
        else{
            alert("Only Images Allowed");
        }

    }
    return (
        <div className="upload">
            <div className="upload__main">
                <progress value="0" min="0" max="100" id="progress"/>
                
                <div class="upload-btn-wrapper">
                        <button class="btn">Choose an Photo</button>
                    <input type="file" name="myfile" onChange={uploadImage} />
                    </div>
               
            </div>
        </div>
    )
}

export default Upload
