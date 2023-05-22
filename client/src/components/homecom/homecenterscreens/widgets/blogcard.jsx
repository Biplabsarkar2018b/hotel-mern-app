import React, { useState } from 'react';

const Blog = () => {
  const [newBlogText, setNewBlogText] = useState('');
//   const [blogs, setBlogs] = useState([]);

  const blogs = [
    {
      id: 1,
      author: {
        name: 'John Doe',
        dp: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      },
      uploadedDate: 'May 1, 2023',
      photo: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in tincidunt enim. Proin elementum lorem nec semper lobortis. Etiam sagittis nisi id nulla vestibulum, auctor ultrices sem ultrices. Sed id orci sit amet est fringilla aliquet vel at purus. Phasellus egestas mattis magna, id interdum velit laoreet eu. Proin tincidunt non erat at convallis. Aliquam erat volutpat.',
    },
    {
      id: 2,
      author: {
        name: 'Jane Smith',
        dp: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
      },
      uploadedDate: 'April 20, 2023',
      photo: 'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      text: 'Curabitur consectetur consectetur tincidunt. Nulla semper erat ut metus pulvinar dapibus. Vivamus pulvinar lectus ex, nec hendrerit felis eleifend nec. Duis convallis iaculis nisi id hendrerit. Nullam consequat congue metus, sed aliquam est fringilla non. Cras convallis risus a quam rhoncus, sit amet viverra nisi aliquam. Integer efficitur felis vitae lobortis egestas. Mauris sed varius purus, ac vestibulum tellus. Nunc dignissim tellus sit amet volutpat dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec non neque vitae risus lobortis interdum nec et velit.',
    },
    // Add more blog posts here...
  ];
  

  const handlePostBlog = () => {
    // Handle posting the new blog
    // You can use this function to update the state or make an API request
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Write Your Thoughts</h1>
        <textarea
          className="w-full rounded-lg p-4 mb-4"
          rows="4"
          placeholder="Write your thoughts here..."
          value={newBlogText}
          onChange={(e) => setNewBlogText(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handlePostBlog}
        >
          Post
        </button>
      </div>
      <h1 className="text-4xl font-bold mb-8">Latest Blogs</h1>
      {blogs.map((blog,ind) => (
        <div key={ind} className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-4">
          {/* Author Details */}
            <div className="flex items-center mb-4">
              <img src={blog.author.dp} alt={blog.author.name} className="w-12 object-cover h-12 rounded-full mr-4" />
              <div>
                <p className="text-gray-600">{blog.author.name}</p>
                <p className="text-gray-500">{blog.uploadedDate}</p>
              </div>
            </div>
            {/* Blog Details */}
            <div className="h-48">
              <img src={blog.photo} alt={blog.author.name} className="w-full h-full object-cover rounded-lg" />
            </div>
            <p>{blog.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
