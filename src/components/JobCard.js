// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-between',
//     },
//     card: {
//       maxWidth: 345,
//       marginBottom: theme.spacing(2),
//     },
//     truncatedDescription: {
//       overflow: 'hidden',
//       textOverflow: 'ellipsis',
//     },
//   }));


// function JobCard (){
//     const classes = useStyles();
//     return (
//     <div className={classes.root}>
//     {jobs.map((job) => (
//       <Card key={job.jdUid} className={classes.card}>
//         <CardHeader
//           avatar={<Avatar src={job.logoUrl} alt="Company Logo" />}
//           title={
//             <Typography variant="h5" component="h2">
//               {job.companyName}
//             </Typography>
//           }
//           subheader={
//             <>
//               <Typography variant="body2" color="textSecondary">
//                 {job.jobRole}
//               </Typography>
//               <Typography variant="body2" color="textSecondary">
//                 {job.location}
//               </Typography>
//             </>
//           }
//         />
//         <CardContent>
//           {isExpanded(job.jdUid) ? (
//             <Typography variant="body2" component="p">
//               {job.jobDetailsFromCompany}
//             </Typography>
//           ) : (
//             <Typography variant="body2" component="p" className={classes.truncatedDescription}>
//               {truncateDescription(job.jobDetailsFromCompany)}
//             </Typography>
//           )}
//           <Typography variant="body2" component="p">
//             Minimum Experience: 
//             {job.minExp !== null ? (` ${job.minExp} years`) : ' Not specified'}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Link href={job.jdLink} target="_blank" rel="noopener noreferrer" underline="none">
//             <Button size="small" color="primary">
//               View Job
//             </Button>
//           </Link>
//           {isExpanded(job.jdUid) ? null : (
//             <Button size="small" onClick={() => handleExpand(job.jdUid)}>
//               Expand Description
//             </Button>
//           )}
//         </CardActions>
//       </Card>
//     ))}
//   </div>
// );
// }

// export default JobCard;


// import React , {useState} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Card, CardHeader, Avatar, Typography, CardContent, CardActions, Link, Button } from '@material-ui/core';

// const [expandedJobIds, setExpandedJobIds] = useState([]);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   card: {
//     maxWidth: 345,
//     marginBottom: theme.spacing(2),
//   },
//   truncatedDescription: {
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   },
// }));


// const handleExpand = (jobId) => {
//     setExpandedJobIds([...expandedJobIds, jobId]);
//   };

//   const isExpanded = (jobId) => expandedJobIds.includes(jobId);

//   const truncateDescription = (description) => {
//     if (description.length > 150) {
//       return description.substring(0, 150) + '...';
//     }
//     return description;
//   };

// function JobCard({ jobs }) {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       {jobs.map((job) => (
//         <Card key={job.jdUid} className={classes.card}>
//           <CardHeader
//             avatar={<Avatar src={job.logoUrl} alt="Company Logo" />}
//             title={
//               <Typography variant="h5" component="h2">
//                 {job.companyName}
//               </Typography>
//             }
//             subheader={
//               <>
//                 <Typography variant="body2" color="textSecondary">
//                   {job.jobRole}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {job.location}
//                 </Typography>
//               </>
//             }
//           />
//           <CardContent>
//             <Typography variant="body2" component="p" className={classes.truncatedDescription}>
//               {job.jobDetailsFromCompany}
//             </Typography>
//             <Typography variant="body2" component="p">
//               Minimum Experience: {job.minExp !== null ? `${job.minExp} years` : ' Not specified'}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Link href={job.jdLink} target="_blank" rel="noopener noreferrer" underline="none">
//               <Button size="small" color="primary">
//                 View Job
//               </Button>
//             </Link>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default JobCard;


// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Card, CardHeader, Avatar, Typography, CardContent, CardActions, Link, Button } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   card: {
//     maxWidth: 345,
//     marginBottom: theme.spacing(2),
//   },
//   truncatedDescription: {
//     overflow: 'hidden',
//     textOverflow: 'ellipsis',
//   },
// }));

// function JobCard({ jobs }) {
//   const classes = useStyles();
//   const [expandedJobIds, setExpandedJobIds] = useState([]);

//   const handleExpand = (jobId) => {
//     setExpandedJobIds([...expandedJobIds, jobId]);
//   };

//   const isExpanded = (jobId) => expandedJobIds.includes(jobId);

//   const truncateDescription = (description) => {
//     if (description.length > 150) {
//       return description.substring(0, 150) + '...';
//     }
//     return description;
//   };

//   return (
//     <div className={classes.root}>
//       {jobs.map((job) => (
//         <Card key={job.jdUid} className={classes.card}>
//           <CardHeader
//             avatar={<Avatar src={job.logoUrl} alt="Company Logo" />}
//             title={
//               <Typography variant="h5" component="h2">
//                 {job.companyName}
//               </Typography>
//             }
//             subheader={
//               <>
//                 <Typography variant="body2" color="textSecondary">
//                   {job.jobRole}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   {job.location}
//                 </Typography>
//               </>
//             }
//           />
//           <CardContent>
//             <Typography variant="body2" component="p" className={classes.truncatedDescription}>
//               {truncateDescription(job.jobDetailsFromCompany)}
//             </Typography>
//             <Typography variant="body2" component="p">
//               Minimum Experience: {job.minExp !== null ? `${job.minExp} years` : ' Not specified'}
//             </Typography>
//           </CardContent>
//           <CardActions>
//             <Link href={job.jdLink} target="_blank" rel="noopener noreferrer" underline="none">
//               <Button size="small" color="primary">
//                 View Job
//               </Button>
//             </Link>
//           </CardActions>
//         </Card>
//       ))}
//     </div>
//   );
// }

// export default JobCard;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Avatar, Typography, CardContent, CardActions, Link, Button } from '@material-ui/core';

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
}));

function JobCard({ jobs }) {
  const classes = useStyles();
  const [expandedJobIds, setExpandedJobIds] = useState([]);

  const handleExpand = (jobId) => {
    if (expandedJobIds.includes(jobId)) {
      setExpandedJobIds(expandedJobIds.filter(id => id !== jobId));
    } else {
      setExpandedJobIds([...expandedJobIds, jobId]);
    }
  };

  const isExpanded = (jobId) => expandedJobIds.includes(jobId);

  const truncateDescription = (description) => {
    if (description.length > 150) {
      return description.substring(0, 150) + '...';
    }
    return description;
  };

  return (
    <div className={classes.root}>
      {jobs.map((job) => (
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
            <Typography variant="body2" component="p" className={classes.truncatedDescription}>
              {isExpanded(job.jdUid) ? job.jobDetailsFromCompany : truncateDescription(job.jobDetailsFromCompany)}
            </Typography>
            <Typography variant="body2" component="p">
              Minimum Experience: {job.minExp !== null ? `${job.minExp} years` : ' Not specified'}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={job.jdLink} target="_blank" rel="noopener noreferrer" underline="none">
              <Button size="small" color="primary">
                View Job
              </Button>
            </Link>
            <Button size="small" onClick={() => handleExpand(job.jdUid)}>
              {isExpanded(job.jdUid) ? 'Collapse Description' : 'Expand Description'}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default JobCard;
