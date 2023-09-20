import React, { useState } from "react";
import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

function AddFoodForm({ onAddFood }) {
  const onFinish = (values) => {
    onAddFood(values);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({
      ...foodData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(foodData);
    setFoodData({
      name: "",
      image: "",
      calories: "",
      servings: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={foodData.name}
          onChange={handleChange}
          name="addFoodForm"
          onFinish={onFinish}
          initialValues={{ quantity: 1 }}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={foodData.image}
          onChange={handleChange}
          label="Food Name"
          rules={[{ required: true, message: "Please enter the food name!" }]}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={foodData.calories}
          onChange={handleChange}
          label="Calories"
          rules={[{ required: true, message: "Please enter the calories!" }]}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={foodData.calories}
          onChange={handleChange}
        />
        <InputNumber min={1} />
      </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          id="servings"
          name="servings"
          value={foodData.servings}
          onChange={handleChange}
        />
      </div>
      <Button type="primary" htmlType="submit">
        Add Food
      </Button>
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
