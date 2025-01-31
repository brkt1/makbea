'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabaseService';

const ProductUpload = ({ onUploadSuccess }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('home');
  const [productImage, setProductImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (event) => {
    setProductImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsUploading(true);

    try {
      if (productImage) {
        // Upload image to Supabase Storage
        const fileExt = productImage.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        const { data: imageData, error: imageError } = await supabase.storage
          .from('product-images')
          .upload(`public/${fileName}`, productImage);

        if (imageError) {
          setError(imageError.message);
          setIsUploading(false);
          return;
        }

        // Get the public URL of the uploaded image
        const { data: { publicUrl } } = supabase.storage
          .from('product-images')
          .getPublicUrl(`public/${fileName}`);

        // Insert product into the database
        const { data: productData, error: productError } = await supabase
          .from('products')
          .insert([{ 
            name: productName,
            price: parseFloat(productPrice),
            description: productDescription,
            category: productCategory,
            image_url: publicUrl
          }]);

        if (productError) {
          setError(productError.message);
        } else {
          setSuccess('Product uploaded successfully!');
          setProductName('');
          setProductPrice('');
          setProductDescription('');
          setProductCategory('home');
          setProductImage(null);
          if (onUploadSuccess) onUploadSuccess();
        }
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-gray-700 text-gray-300 focus:outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Price
        </label>
        <input
          type="number"
          step="0.01"
          placeholder="Enter price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-gray-700 text-gray-300 focus:outline-none focus:border-cyan-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          placeholder="Enter product description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
          className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-gray-700 text-gray-300 focus:outline-none focus:border-cyan-400 h-32"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Category
        </label>
        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-gray-700 text-gray-300 focus:outline-none focus:border-cyan-400"
        >
          <option value="home">Home</option>
          <option value="tech">Tech</option>
          <option value="gifts">Gifts</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Product Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full px-4 py-2 rounded-lg bg-navy-800 border border-gray-700 text-gray-300 focus:outline-none focus:border-cyan-400"
        />
      </div>

      <button
        type="submit"
        disabled={isUploading}
        className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 disabled:opacity-50"
      >
        {isUploading ? 'Uploading...' : 'Upload Product'}
      </button>

      {error && <p className="text-red-400 mt-4">{error}</p>}
      {success && <p className="text-green-400 mt-4">{success}</p>}
    </form>
  );
};

export default ProductUpload;
