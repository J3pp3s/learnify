import React, { useEffect } from 'react';
import { Card, Col, Pagination, Radio, Row } from 'antd';
import { Course } from '../models/course';
import ShowCourses from '../components/ShowCourses';
import { useAppDispatch, useAppSelector } from '../redux/store/configureStore';
import { coursesSelector, getCoursesAsync, setCourseParams, setPageNumber } from '../redux/slice/courseSlice';
import { Category } from '../models/category';
import { categoriesSelector } from '../redux/slice/categorySlice';

const sortOptions = [
  { value: 'title', label: 'Alphabetical' },
  { value: 'priceDescending', label: 'Price - High to low' },
  { value: 'priceAscending', label: 'Price - Low to high' },
  { value: 'ratingDescending', label: 'Highest rating'},
];

const Homepage = () => {
  const data = useAppSelector(coursesSelector.selectAll);
  const dispatch = useAppDispatch();
  const { coursesLoaded, courseParams, pagination } = useAppSelector((state) => state.course);
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

  function onChange(pageNumber: number) {
    dispatch(setPageNumber({pageIndex: pageNumber}))
  }

  return (
    <div className="course">
      <div className="course__header">
        <h1>What to learn next?</h1>
        <h2>New courses picked just for you...</h2>
      </div>
      <Row gutter={[24, 32]}>
        <Col span={4}>
          <Card type="inner" title="Sorting Options" className="course__card-radios">
            <Radio.Group
            value={courseParams.sort}
            options={sortOptions}
            onChange={(e) =>
            dispatch(setCourseParams({sort: e.target.value}))
            }
            />
          </Card>
          <Card type="inner" title="Choose Category" className="course__card-radios">
            <Radio.Group
            value={courseParams.category}
            options={getCategories()} 
            onChange={(e) =>
            dispatch(setCourseParams({category: e.target.value}))
            }
            />
          </Card>
        </Col>
        <Col span={20}>
          <Row gutter={[24, 32]}>
            {data &&
              data.map((course: Course, index: number) => {
                return <ShowCourses key={index} course={course} />;
              })}
          </Row>
          <div className="pagination">
          {pagination && (
              <Pagination
                defaultCurrent={pagination?.pageIndex}
                total={pagination?.totalCount}
                onChange={onChange}
                pageSize={pagination?.pageSize}
              />
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;