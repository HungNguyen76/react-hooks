import React, { useState } from "react";

// const gifts = [
//     'CPU i9',
//     'RAM 32GB',
//     'RGB Keyboard'
// ]
const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];
const TwoWayBinding = () => {
  const [checked, setChecked] = useState([]);
  // const [gift, setGift ] = useState();

  // const randomGift = () => {
  //     const index = Math.floor(Math.random() * gifts.length);
  //     setGift(gifts[index])
  // }
  // eslint-disable-next-line no-lone-blocks
  {
    /* <h1>{gift || 'Chưa có phần thưởng'}</h1> */
  }
  // eslint-disable-next-line no-lone-blocks
  {
    /* <button onClick={randomGift}>Lấy thưởng</button> */
  }

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  const handleSubmit = () => {
      console.log({ids: checked})
  }
  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};
export default TwoWayBinding;
