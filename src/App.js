import logo from './logo.svg';
import './App.css';

function App() {

  const list = [
    {
        gen:'Female.NL',
        name:'Ms. Teatske Nijenhuis',
        mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
    {
      gen:'Female.NL',
      name:'Ms. Teatske Nijenhuis',
      mail:'marius.misje@example.com'
    },
]

  return (
    <div className="App">
      <div>
        <div className='top-card'>
          <div className="profile">
            <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" />
          </div>
          <div className='detials'>
            <div className='name'>
              Ms. Teatske Nijenhuis
            </div>
            <div className='add'>
              <span className='dooron' >775</span>,heindertweg, born, zeeland, <span className='land'>Netherlands</span>, 18818 +6:00 - Almaty, <span className='underline'>Dhaka</span>, Colombo
            </div>
            <div className='gen'>
              Female
            </div>
          </div>
        </div>
        <div className='members-detials'>
          {
            list.map((item, i) => (
              <div className='detial-cards' key={i} >
                <div className='map-gen'>
                  {item.gen}
                </div>
                <div className='map-name'>
                  {item.name}
                </div>
                <div className='map-mail'>
                  {item.mail}
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
