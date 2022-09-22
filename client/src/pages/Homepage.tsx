import React, { useEffect } from 'react';
import { Card, Col, Radio, Row } from 'antd';
import { Course } from '../models/course';
import ShowCourses from '../components/ShowCourses';
import { useAppDispatch, useAppSelector } from '../redux/store/configureStore';
import { coursesSelector, getCoursesAsync } from '../redux/slice/courseSlice';
import { Category } from '../models/category';
import { categoriesSelector } from '../redux/slice/categorySlice';

const sortOptions = [
  { value: 'title', label: 'Alphabetical' },
  { value: 'priceDescending', label: 'Price - High to low' },
  { value: 'priceAscending', label: 'Price - Low to high' },
];

const Homepage = () => {
  const data = useAppSelector(coursesSelector.selectAll);
  const dispatch = useAppDispatch();
  const { coursesLoaded } = useAppSelector((state) => state.course);
  const categories = useAppSelector(categoriesSelector.selectAll);

  const getCategories = () => {
    const catArray: any[] = [];
    categories.forEach((category: Category) => {
      catArray.push({ value: category.id, label: category.name });
    });
    return catArray;
  };

  useEffect(() => {
    if (!coursesLoaded) dispatch(getCoursesAsync());
  }, [coursesLoaded, dispatch]);

  return (
    <div className="course">
      <div className="course__header">
        <h1>What to learn Next?</h1>
        <h2>New Courses picked just for you...</h2>
      </div>
      <Row gutter={[24, 32]}>
        <Col span={4}>
          <Card title="Sorting Options">
            <Radio.Group options={sortOptions} />
          </Card>
          <Card title="Choose Category">
            <Radio.Group options={getCategories()} />
          </Card>
        </Col>
        <Col span={20}>
          <Row gutter={[24, 32]}>
            {data &&
              data.map((course: Course, index: number) => {
                return <ShowCourses key={index} course={course} />;
              })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;