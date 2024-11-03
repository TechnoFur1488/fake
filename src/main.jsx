import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Input from './components/Input/Input';
import ErrorPage404 from './components/Error/ErrorPage404';



const router = createBrowserRouter([
	{
		path: '/',
		element: <Input />,
		errorElement: <ErrorPage404 />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);