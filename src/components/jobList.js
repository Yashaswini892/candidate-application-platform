import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import fetchJobs from '../data/index'; // Replace with your data fetching function
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import './style.css'; // Import your CSS file

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    maxWidth: 345,
    marginBottom: theme.spacing(2),
  },
  truncatedDescription: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  filterContainer: {
    marginBottom: theme.spacing(2),
  },
  filterSelect: {
    marginRight: theme.spacing(2),
  },
  whiteBoldText: {
    color: 'white',
    fontWeight: 'bold',
  },
}));

function JobList() {
  const classes = useStyles();
  const [jobs, setJobs] = useState([]); // Store fetched jobs
  const [filteredJobs, setFilteredJobs] = useState([]); // Store filtered jobs
  const [totalCount, setTotalCount] = useState(0);
  const [expandedJobIds, setExpandedJobIds] = useState([]);
  const MAX_CHAR_COUNT = 150;
  const [buttonClicked, setButtonClicked] = useState(false);

  const [minExperience, setMinExperience] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [preferredRole, setPreferredRole] = useState("");
  const [minBasePay, setMinBasePay] = useState(0);
  const [locationOption, setLocationOption] = useState('Default');


  useEffect(() => {
    const fetchData = async () => {
      const jobData = await fetchJobs();
      setJobs(jobData);
      setTotalCount(jobData.length);
      console.log("total length is " , totalCount);
    };

    fetchData();
  }, []);

  const handleExpand = (jobId) => {
    setExpandedJobIds([...expandedJobIds, jobId]);
  };

  const isExpanded = (jobId) => expandedJobIds.includes(jobId);

  const truncateDescription = (description) => {
    if (description.length > MAX_CHAR_COUNT) {
      return description.substring(0, MAX_CHAR_COUNT) + '...';
    }
    return description;
  };
  
  const filterJobs = () => {
    console.log("Filtering...");
    const minExpValue = isNaN(parseInt(minExperience)) ? 0 : parseInt(minExperience);
    const minBasePayValue = isNaN(parseFloat(minBasePay)) ? 0 : parseFloat(minBasePay);

    const filtered = jobs.filter((job) => {
      const experienceMatch = minExpValue === 0 || job.minExp <= minExpValue;
      const companyMatch = companyName === "" || job.companyName.toLowerCase().includes(companyName.toLowerCase());
      const roleMatch = preferredRole === "" || job.jobRole.toLowerCase().includes(preferredRole.toLowerCase());
      const basePayMatch = minBasePay === 0 || (job.minJdSalary !== null && job.minJdSalary >= minBasePayValue);

      let locationMatch = true;
  if (preferredLocation !== "") {
    locationMatch = job.location.toLowerCase().includes(preferredLocation.toLowerCase());
  } else {
    // Check dropdown option
    if (locationOption === 'Remote') {
      locationMatch = job.location.toLowerCase() === "remote";
    } else if (locationOption === 'On-site') {
      // Nested if-else for 'On-site' option
      if (preferredLocation !== "") {
        locationMatch = job.location.toLowerCase().includes(preferredLocation.toLowerCase());
      } else {
        locationMatch = job.location.toLowerCase() !== "remote";
      }
    }
  }


  return experienceMatch && companyMatch && roleMatch && basePayMatch && locationMatch;
});

console.log("Filtered jobs:", filtered);
setButtonClicked(true);
setFilteredJobs(filtered);
  };

  

  const allJobs = jobs.length > 0 ? jobs : [];


  return (
    <div>
      <div className={classes.root}>
      <div style ={{display : 'flex' , flexDirection : 'column'}}>
      <div>
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Enter min experience"
              onChange={(event) => {
            const minEx= parseInt(event.target.value);
            console.log(minEx);
            setMinExperience(minEx);}}
            />
          </form>
          <form>
            <input
              type="text"
              placeholder="Enter company name"
              onChange={(event) => {            
            const compa= event.target.value;
            console.log("compa is" , compa);
            setCompanyName(compa);}}
            />
          </form>
          <form>
            <input
              type="text"
              placeholder="Enter preferred location"
              onChange={(event) =>  {
            const loco =event.target.value;
            console.log(loco);
            setPreferredLocation(loco);}}
              disabled={locationOption === 'Remote'}
          //   type="text"
          // placeholder="Enter preferred location"
          // value={preferredLocation}
          // onChange={handlePreferredLocationChange}
          // disabled={locationOption === 'Disabled'}
            />
</form>
          <form>
            <input
              type="text"
              placeholder="Enter preferred role"
              onChange={(event) => setPreferredRole(event.target.value)}
            />
          </form>
          <form>
            <input
              type="number"
              placeholder="Enter min base pay"
              onChange={(event) => {
            const minBase= parseInt(event.target.value);
            console.log(minBase);
            setMinBasePay(minBase);}}
            />
          </form>
          <form>
            <input
              type="text"
              placeholder="Enter techstack"
            />
          </form>
          <select
          value={locationOption}
          onChange={(event) => setLocationOption(event.target.value)}
          disabled={preferredLocation !== ""} // Disable dropdown if preferred location is entered
        >
          <option value="Default">Remote/On-site</option>
          <option value="Remote">Remote</option>
          <option value="On-site">On-site</option>
        </select>
          <button style={{ marginLeft: "25px" }} onClick={filterJobs}>
            Apply filter
          </button>
        </div>
        </div>
        

              {buttonClicked ? (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {filteredJobs.length === 0 ? (
      <h2>No Jobs found</h2>
                            ) 
                            : 
                  (
                    <>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <h2>Shows {filteredJobs.length} results</h2>
                      </div>
                  <div style = {{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                  {filteredJobs.map((job) => (
                    <Card key={job.jdUid} className={classes.card}>
                      <CardHeader
                        avatar={<Avatar src={job.logoUrl} alt="Company Logo" />}
                        title={
                          <Typography variant="h5" component="h2">
                            {job.companyName}
                          </Typography>
                        }
                        subheader={
                          <>
                            <Typography variant="body2" color="textSecondary">
                              {job.jobRole}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {job.location}
                            </Typography>
                          </>
                        }
                      />
                    <CardContent>
                      {isExpanded(job.jdUid) ? (
                        <Typography variant="body2" component="p">
                          {job.jobDetailsFromCompany}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.truncatedDescription}
                        >
                          {truncateDescription(job.jobDetailsFromCompany)}
                        </Typography>
                      )}
                      <Typography variant="body2" component="p">
                        Minimum Experience:{" "}
                        {job.minExp !== null ? (
                          job.minExp === job.maxExp ? ` ${job.minExp} years` : ` ${job.minExp} - ${job.maxExp} years`
                        ) : ' Not specified'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style = {{backgroundColor : "green"}}>
                              <Link
                                href={job.jdLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                style={{ width: '100%', marginBottom: '8px' }} 
                              >
                                <Button size="small" className={classes.whiteBoldText} style={{ width: '100%' }}>
                                  View Job
                                </Button>
                              </Link>
                        </div>
              <div>
              {isExpanded(job.jdUid) ? null : (
              <Button
                size="small"
                onClick={() => handleExpand(job.jdUid)}
                style={{ width: '100%' }}
              >
                Expand Description
              </Button>
              )}
              </div>
              </div>
                    </CardActions>
                    
                    </Card>
                  )) }
                  </div>
                  </div>
                  </>
                  )}
                </div> ) : (
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
              {allJobs.length > 0 ? (
                allJobs.map((job) => (
                  <Card key={job.jdUid} className={classes.card}>
                    <CardHeader
                      avatar={<Avatar src={job.logoUrl} alt="Company Logo" />}
                      title={
                        <Typography variant="h5" component="h2">
                          {job.companyName}
                        </Typography>
                      }
                      subheader={
                        <>
                          <Typography variant="body2" color="textSecondary">
                            {job.jobRole}
                          </Typography>
                          <Typography variant="body2" color="textSecondary">
                            {job.location}
                          </Typography>
                        </>
                      }
                    />
                    <CardContent>
                      {isExpanded(job.jdUid) ? (
                        <Typography variant="body2" component="p">
                          {job.jobDetailsFromCompany}
                        </Typography>
                      ) : (
                        <Typography
                          variant="body2"
                          component="p"
                          className={classes.truncatedDescription}
                        >
                          {truncateDescription(job.jobDetailsFromCompany)}
                        </Typography>
                      )}
                      <Typography variant="body2" component="p">
                        Minimum Experience:{" "}
                        {job.minExp !== null ? (
                          job.minExp === job.maxExp ? ` ${job.minExp} years` : ` ${job.minExp} - ${job.maxExp} years`
                        ) : ' Not specified'}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style = {{backgroundColor : "green"}}>
                              <Link
                                href={job.jdLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                style={{ width: '100%', marginBottom: '8px' }} 
                              >
                                <Button size="small" className={classes.whiteBoldText} style={{ width: '100%' }}>
                                  View Job
                                </Button>
                              </Link>
                        </div>
              <div>
              {isExpanded(job.jdUid) ? null : (
              <Button
                size="small"
                onClick={() => handleExpand(job.jdUid)}
                style={{ width: '100%' }}
              >
                Expand Description
              </Button>
              )}
              </div>
              </div>

                    </CardActions>
                  </Card>
                ))
              ) : (
                <Typography variant="body1">Loading jobs...</Typography> // Display loading message while fetching data
              )}
              </div>
                )}
                
              </div>
              </div>
              </div>
              );
              }

export default JobList;
