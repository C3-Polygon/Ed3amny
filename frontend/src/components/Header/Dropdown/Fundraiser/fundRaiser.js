
const Fundraiser = (e) => { 


    const deletefundRaiser = () => { 
        try {
          await axios.delete(`http://localhost:5000/${id}`, {
            headers: {
              Authorization: `Bearer ${tokenSave}`,
            },
          });
        } catch (error) {
          console.log(error);
        }
    
      }
    
      //update fundraiser
      const updatefundRaiser = async (id) => {
        let NewBody = {
          userId: state2.userId,
          country,
          typee,
          targett,
          img,
          title,
          descriptionn,
        }
        try {
          const res = await axios.put(
            `http://localhost:5000/${id}`,NewBody ,
            {
              headers: {
                Authorization: `Bearer ${tokenSave}`,
              },
            }
          );
          console.log(res.data);
        } catch (error) {
          console.log(error);
        }
      };
    
    
    //get all fundraiser
      const getAllFundraiser = async () => {
        try {
          const res = await axios.get("http://localhost:5000/fundraiser");
          
        } catch (error) {
          console.log(error);
        }
      };

      return ( 

 <>
 </>
)

}

export default Fundraiser