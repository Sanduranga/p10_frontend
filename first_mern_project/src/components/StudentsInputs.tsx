import axios, { AxiosResponse } from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

interface Student {
  name: string;
  age: number;
  gender: string;
  subject1: string;
  marks1: number;
  subject2: string;
  marks2: number;
  subject3: string;
  marks3: number;
}

const initialValues: Student = {
  name: "",
  age: 0,
  gender: "",
  subject1: "",
  marks1: 0,
  subject2: "",
  marks2: 0,
  subject3: "",
  marks3: 0,
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  gender: Yup.string().required("Gender is required"),
  subject1: Yup.string().required(),
  marks1: Yup.number(),
});

const StudentsInput = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "",
    subject1: "",
    marks1: 0,
    subject2: "",
    marks2: 0,
    subject3: "",
    marks3: 0,
  });
  useEffect(() => {
    axios
      .post("http://localhost:5555/firstapi", formData)
      .then((response: AxiosResponse) => {
        console.log(response.data);
      });
  }, [formData]);

  const handleSubmit = (values: Student) => {
    console.log("Submitted values:", values);
    setFormData({
      ...formData,
      name: values.name,
      age: values.age,
      gender: values.gender,
      subject1: values.subject1,
      marks1: values.marks1,
      subject2: values.subject2,
      marks2: values.marks2,
      subject3: values.subject3,
      marks3: values.marks3,
    });
  };

  return (
    <div className="p-4 md:p-8 lg:p-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Student Inputs
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="p-2 md:p-4  border-2 border-gray-400 ">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="age" className="block text-sm font-medium mb-2">
                Age:
              </label>
              <Field
                type="number"
                id="age"
                name="age"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium mb-2"
              >
                Gender:
              </label>
              <Field
                as="select"
                id="gender"
                name="gender"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject1"
                className="block text-sm font-medium mb-2"
              >
                subject1:
              </label>
              <Field
                type="text"
                id="subject1"
                name="subject1"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="subject1"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="marks1"
                className="block text-sm font-medium mb-2"
              >
                marks1:
              </label>
              <Field
                type="number"
                id="marks1"
                name="marks1"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="marks1"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject2"
                className="block text-sm font-medium mb-2"
              >
                subject2:
              </label>
              <Field
                type="text"
                id="subject2"
                name="subject2"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="subject2"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="marks2"
                className="block text-sm font-medium mb-2"
              >
                marks2:
              </label>
              <Field
                type="number"
                id="marks2"
                name="marks2"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="marks2"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="subject3"
                className="block text-sm font-medium mb-2"
              >
                subject3:
              </label>
              <Field
                type="text"
                id="subject3"
                name="subject3"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="subject3"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="marks3"
                className="block text-sm font-medium mb-2"
              >
                marks3:
              </label>
              <Field
                type="number"
                id="marks3"
                name="marks3"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-200"
              />
              <ErrorMessage
                name="marks3"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentsInput;
