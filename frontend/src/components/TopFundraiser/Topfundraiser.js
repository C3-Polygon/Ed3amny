import React , {useState , useEffect} from 'react'
import axios from 'axios';
import './Topfundraiser.css';
import "bootstrap/dist/css/bootstrap.min.css";
import  ProgressBar  from 'react-bootstrap/ProgressBar';
 const Topfundraiser = () => {
     const [result, setResult] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser`).then((result) => {
            setResult(result.data.result);
        }).catch((err) => {
            console.log(err);
        },)
      },[]);

    return (
        <>
        <div className="Main-Topfundraiser">
            <div className="container">
                <h2>Top fundraiser</h2>
                <div className="row">
            {result &&
                result.map((data) => {
                return <div className="col-md-4">
                    <div className="mainViewfundraiser">
                        <img src={data.img} alt='not found photo'/>
                        <div className="mainViewfundraiserText">
                            <h5>{data.title}</h5>
                            <p>{data.descriptionn}</p>
                            <ProgressBar variant="success" now={50}/>
                            <p>${data.current_target} <bold>raised</bold> ${data.targett}</p>
                        </div>
                    </div>
                     </div>;
                })}
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Topfundraiser;
