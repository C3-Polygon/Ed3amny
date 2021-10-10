//Get all hospital
const getAllHospitals = (req, res) => {
  const query = `SELECT * FROM HospitalTable `;
  connection.query(query, (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: error,
      });
    }
    res
      .status(200)
      .json({ success: true, message: `All Hospitals`, result: result });
  });
};
