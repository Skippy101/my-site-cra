import React from 'react';

const Filter = ({ setFilter }) => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch('/api/tags')
      .then(res => res.json())
      .then(data => setTags(data));
  }, []);

  return (
    <div className="filter">
      <select onChange={e => setFilter({ tags: e.target.value })}>
        {tags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;