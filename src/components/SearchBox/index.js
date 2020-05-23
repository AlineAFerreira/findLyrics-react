import React, {useState} from 'react';
import './styles.css';

const SearchBox = () => {
  const [results, setResults] = useState(
    // [
    //   {
    //     name: 'Aline',
    //     age: 30
    //   },
    //   {name: 'Cacá',
    //     age: 7
    //   }
    // ]
  );

  
  function handlerChangeSearch(e) {
    const value = e.target.value;

    if (value.length >= 3) {
      const enc = encodeURI(value);
      let temp = [];

      fetch(`https://api.lyrics.ovh/suggest/${enc}`)
      .then(result => {return result.json()})
      .then(data => {
        data.data.map(item =>{      
          temp.push({
            id: item.id,
            song: item.title,
            artist: item.artist.name,
            artistPicture: item.artist.picture,
            album: item.album.title,
            cover: item.album.cover
          });
        })
        setResults(temp);
      })
    } else {
      setResults([]);
    }
  }

  return (
      <div>
        <input type="text" placeholder="Type here..." onChange={handlerChangeSearch}/>
        <div>
          { results &&
            results.map((item) => {
              return (
                <p key={item.id}>
                  {item.song}<br />
                  {item.artist}<br />
                  {item.album}<br />
                  <img src={item.cover} />
                </p>
              )
            })
          }
        </div>
      </div>
  );
}

export default SearchBox;