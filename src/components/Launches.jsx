import { gql, useQuery } from '@apollo/client';

const LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
      id
    }
  }
`;

const ExchangeRates = () => {
    const { loading, error, data } = useQuery(LAUNCHES);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>

    const formatDate = (date) => {
      let d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      if(month.length < 2) {
        month = '0' + month
      };
      if(day.length < 2) {
        day = '0' + day
      }

      return [year, month, day].join('/');
    }
    return (
      <div className='launches'>
        {data.launches.map(({ launch_date_utc, launch_success, rocket, links, details, id }) => (
        <div key={id} className='launch'>
          <h2>{rocket.rocket_name}</h2>
          <p>{formatDate(launch_date_utc)}</p>
          <p>{launch_success ? "Success" : "Fail"}</p>
          <iframe title='video-launch' width='100%' height='auto' src={links.video_link} />
          <p>{details}</p>
        </div>))}
      </div>
    )
}

export default ExchangeRates;
