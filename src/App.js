import React from 'react';
import './style.css';

export default function App() {
  const newsletter = [
    {
      id: '1',
      name: 'Boundless & Ballin',
      author: 'Jordan Pagkalinawan',
      founded: 'December 2021',
      subscribers: '300',
      rate: 'Free',
    },
    {
      id: '2',
      name: 'Andrew Zimmerns Spilled Milk',
      author: 'Andrew Zimmern',
      founded: 'June 2020',
      subscribers: '500',
      rate: '$5/month',
    },
    {
      id: '3',
      name: 'Animation Obsessive',
      author: 'N/A',
      founded: 'December 2020',
      subscribers: '400',
      rate: '$6/month',
    },
    {
      id: '4',
      name: 'Gjournals',
      author: 'Gjelina Group',
      founded: 'December 2021',
      subscribers: '650',
      rate: '$5/month',
    },
    {
      id: '5',
      name: 'Default Wisdom',
      author: 'Katherine Dee',
      founded: 'December 2021',
      subscribers: '5,040',
      rate: '$6.50/month',
    },
  ];
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Newsletter List</h1>
      {newsletter.map((data) => {
        return (
          <div className="display-card" key="id">
            <h2 key="id">{data.name}</h2>
            <p>
              By {data.author}; Est. {data.founded}; Subscribers:{' '}
              {data.subscribers}, Rate: {data.rate}
            </p>
          </div>
        );
      })}
      <section id="footer" style={{ textAlign: 'center' }}>
        <p>
          <i>For more newsletters, check out Substack</i>
        </p>
      </section>
    </div>
  );
}
/* FORMAT:
{
  id: "",
  name: "",
  author: "",
  founded: "",
  subscribers: "",
  rate: "",
},
*/
