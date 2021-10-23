import React , { useState, useEffect }from 'react'
import '../Slider/Slider.css';
import axios from 'axios';

import { AiFillEye  ,AiTwotoneSchedule ,AiOutlineUsergroupAdd} from 'react-icons/ai';
function MainPageD (){
    const [fundraiser, setFundraiser] = useState();
    const [user, setUser] = useState();
    const [pendingpost, setPendingpost] = useState();
    const [getfundraiser, setGetfundraiser] = useState([]);

    const [users, setUsers] = useState();
    useEffect(() => {
        axios.get(`http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`).then((result) => {
            setFundraiser(result.data.allData.length);
        }).catch((err) => {
            console.log(err);
        },)

        axios.get(`http://localhost:5000/admin/users`).then((result) => {
            setUser(result.data.result.length);
           }).catch((err) => {
               console.log(err);
           },)



           axios.get(`http://localhost:5000/admin/pending`).then((result) => {
            setPendingpost(result.data.Fundraiser.length);
           }).catch((err) => {
               console.log(err);
           },)


           axios.get(`http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`).then((result) => {
            setGetfundraiser(result.data.allData);
            return;
        }).catch((error) => {
            throw error;
        })
        axios.get(`http://localhost:5000/admin/users`).then((result) => {
            setUsers(result.data.result);
           }).catch((err) => {
               console.log(err);
           },)

      },[]);


      
      const getallpost = () =>{
        axios.get(`http://localhost:5000/fundraiser/admin/dashbord/get/getallfundreiser`).then((result) => {
            setGetfundraiser(result.data.allData);
            return;
        }).catch((error) => {
            throw error;
        })
      }

    const Accsept = (id)=>{
        axios.put(`http://localhost:5000/admin/accept/${id}`).then((result) => {
            getallpost();
        }).catch((err) => {
            throw err;
            
        })
    }

    const reject =(id)=>{
        axios.put(`
        http://localhost:5000/admin/rejected/${id}`).then((result) => {
            getallpost();
        }).catch((err) => {
            throw err;
            
        })
    }

    const pending = (id)=>{
        axios.put(`
        http://localhost:5000/admin/batataa/batata/pending/${id}`).then((result) => {
            getallpost();
        }).catch((err) => {
            throw err;
            
        })

    }

    const ChangeFundraiserType = (id , typepost)=>{
            if(typepost === 0){
                Accsept(id);
            }else if(typepost === 1){
                reject(id);
            }else{
                pending(id);
            }
    }
    return (
        <div className="main-content">
          <main>
              
            {/* Start Card Count */}
            <div class="cards">

                <div class="card-single">
                    <div>
                        <h1>{fundraiser}</h1>
                        <span>All fundraisers</span>
                    </div>
                    <div>
                        <span>
                        <AiTwotoneSchedule className='icon-show' /> 
                        </span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1>{user}</h1>
                        <span>Total Users</span>
                    </div>
                    <div>
                        <span>
                        <AiOutlineUsergroupAdd className='icon-show'/>
                        </span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1>{pendingpost !== 0 ? pendingpost : <h6>There's No Pending Fundraisers</h6> }</h1>
                        <span>Pending Fundraisers</span>
                    </div>
                    <div>
                        <span>
                        <AiFillEye className='icon-show'/> 
                        </span>
                    </div>
                </div>

                <div class="card-single">
                    <div>
                        <h1>2</h1>
                        <span>other one</span>
                    </div>
                    <div>
                        <span class="lab la-wpforms"></span>
                    </div>
                </div>
            </div>
            {/* End Card Count */}
            
            {/** Start Fundraiser recientes*/}
            <div class="recent-grid">
                <div class="projects">
                    <div class="card">
                        <div class="card-header">
                            <h3>Fundraisers recientes</h3>

                            <button>Mostrar todo <span class="las la-arrow-right">
                            </span></button>
                        </div>

                        <div class="card-body">
                            <div class="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>#id</td>
                                            <td>Fundraiser Title</td>
                                            <td>Status</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {getfundraiser&&getfundraiser.map((post ,index)=>{
                                        return(
                                            <tr key={index}>
                                            <td>{post.id}</td>
                                            <td>{post.title}</td>
                                            <td>
                                            { post.is_deleted === 0 ? <span className='status yellow' onClick={()=>{ChangeFundraiserType(post.id , 0)}}></span> : post.is_deleted === 1 ? <span className='status green' onClick={()=>{ChangeFundraiserType(post.id ,1 )}}></span>  : post.is_deleted === 2 ? <span className='status red' onClick={()=>{ChangeFundraiserType(post.id , 2)}}></span>  : console.log("UnKnown")}
                                                
                                            </td>
                                        </tr>
                                        )
                                    })}
                                     
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>

                {/** End Fundraiser recientes*/}

                
                {/** Start users recientes*/}

                <div class="customers">

                    <div class="card">
                        <div class="card-header">
                            <h3>users recientes</h3>

                            <button>Mostrar todo <span class="las la-arrow-right">
                            </span></button>
                        </div>

                        <div class="card-body">
                            {users&&users.map((user ,index)=>{

                                return(
                                    <>
                                    <div class="customer" key={index}>
                                <div class="info">
                                    <img src={user.img} width="40px" height="40px" alt=""/>
                                    <div>
                                        <h4>{user.firstName}</h4>
                                        <small>{user.country}</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="las la-user-circle"></span>
                                    <span class="lab la-whatsapp"></span>
                                    <span class="las la-phone"></span>
                                </div>
                            </div>
                                    
                                    
                                    </>

                                )
                            })}
                            
                        {/* <div class="customer">
                                <div class="info">
                                    <img src="avatars/1.png" width="40px" height="40px" alt=""/>
                                    <div>
                                        <h4>Ana Maria Acosta</h4>
                                        <small>Diarrea</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="las la-user-circle"></span>
                                    <span class="lab la-whatsapp"></span>
                                    <span class="las la-phone"></span>
                                </div>
                            </div> */}


                        </div>
                    </div>
                </div>
                
                {/** End users recientes*/}
                
            </div>
        </main>   
        </div>
    )
}

export default MainPageD
