/*import { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";
import Spinner from "./Spinner";
import {ReactSortable} from "react-sortablejs";

export default function ProductForm({
    _id,
    title:existingTitle,
    description:existingDescription,
    price:existingPrice,
    images:existingImages,
    category:assignedCategory,
    properties:assignedProperties,
}) 
{
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    //const [category, setCategory] = useState(assignedCategory || '');
    const [category, setCategory] = useState(assignedCategory || null);
    const [productProperties, setProductProperties] = useState(assignedProperties || {});
    const [price, setPrice] = useState(existingPrice || '');
    const [images, setImages] = useState(existingImages || []);
    const [goToProduct, setGoToProduct] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    useEffect(() => {
      axios.get('/api/categories').then(result =>{
        setCategories(result.data);
      })
    }, []);

*/

    /*  Not usefull section till line 52 -> const
    // Initialize state variables with default values
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    // Use useEffect to set the state with existing data when the component mounts
    useEffect(() => {
        setTitle(existingTitle || '');
        setDescription(existingDescription || '');
        setPrice(existingPrice || '');
    }, [existingTitle, existingDescription, existingPrice]);

    const [goToProduct, setGoToProduct] = useState(false);
    const router = useRouter();*/

/*
    async function saveProduct(ev){
      ev.preventDefault();
      const data = {title,description,price,images,category,
        properties:productProperties};
      if(_id)
      {
        //update
        await axios.put('/api/products', {...data,_id});
      }
      else
      {
        //create
        await axios.post('/api/products', data);
        
      }
      setGoToProduct(true);
  }

    if(goToProduct)
    {
        router.push('/products');
    }

    async function uploadImages(ev){  
      const files = ev.target?.files;
      if(files?.length > 0){
        setIsUploading(true);
        const data = new FormData();
        for(const file of files){
          data.append('file', file);
        }

        const res= await axios.post('/api/upload', data);
        setImages(oldImages =>{
          return [...oldImages, ...res.data.links];
        });
        setIsUploading(false);
      }
    }

    function updateImagesOrder(images){
      setImages(images);
    }

    function setProductProp(propName, value)
    {
      setProductProperties(prev => {
        const newProductProps = {...prev};
        newProductProps[propName] = value;
        return newProductProps;
      });
    } 

    const propertiesToFill = [];
    if(categories.length > 0 && category) {
      let catInfo = categories.find(({_id}) => _id === category);
      propertiesToFill.push(...catInfo.properties);
      while(catInfo?.parent?._id){
        const parentCat = categories.find(({_id}) => _id === 
          catInfo?.parent?._id);
        propertiesToFill.push(...parentCat.properties);
        catInfo = parentCat;
      }
    }


  return (
    <form onSubmit={saveProduct}>
        

    <label>Product Name</label>
      <input type="text" placeholder="product name" 
        value={title} onChange={ev =>setTitle(ev.target.value)}/>
    
    <label>Category</label>
    <select value={category} onChange={ev => setCategory(ev.target.value)}>
      <option value="">Uncategorized</option>
      {categories.length > 0 && categories.map(c => (
        <option value={c._id}>{c.name}</option>
      ))}
    </select>

    {propertiesToFill.length > 0 && propertiesToFill.map(p =>
      (
        <div className="flex gap-1">
          <div>{p.name}</div>
          <select value={productProperties[p.name]} 
            onChange={ ev => 
            setProductProp(p.name, ev.target.value)}>
            {p.values.map(v => (
              <option value={v}>{v}</option>
            ))}
          </select>
        </div>
      ))}

    <label>
      Photos
    </label>
    <div className="mb-2 flex flex-wrap gap-1">
      <ReactSortable list ={images} 
      className="flex flex-wrap gap-1"
      setList={updateImagesOrder}>
      {!!images?.length && images.map(link =>(
        <div key ={link} className="h-24">
          <img src={link} alt ="" className="rounded-lg"/>
        </div>
      ))}
      </ReactSortable>
      {isUploading && (
        <div className="h-24 flex items-center">
          <Spinner />
        </div>
      )}
      <label className="w-24 h-24 cursor-pointer text-center 
        flex items-center justify-center text-sm gap-1 
        text-gray-500 rounded-lg bg-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
        <div>
          Upload
        </div>
        <input type="file" onChange={uploadImages} className="hidden"/>
      </label>
      
    </div>

    <label>Description</label>
      <textarea placeholder="description"
      value={description} onChange={ev =>setDescription(ev.target.value)}></textarea>
    
    <label>Price (in INR)</label>
      <input type="number" placeholder="price"
      value={price} onChange={ev =>setPrice(ev.target.value)}/>
    
    <button type="submit" 
      className="btn-primary">Save</button>

    </form>
  );
}
*/


//animation added
import { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";
import Spinner from "./Spinner";
import {ReactSortable} from "react-sortablejs"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties: assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(assignedCategory || null);
  const [productProperties, setProductProperties] = useState(assignedProperties || {});
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProduct, setGoToProduct] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get("/api/categories").then((result) => {
      setCategories(result.data);
    });
  }, []);

  async function saveProduct(ev) {
    ev.preventDefault();

    if (!title.trim() || !price) {
      // Show an animated error message
      toast.error("Product Name and Price are required!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
      });
      return;
    }

    const data = { title, description, price, images, category, properties: productProperties };
    if (_id) {
      // Update
      await axios.put("/api/products", { ...data, _id });
    } else {
      // Create
      await axios.post("/api/products", data);
    }
    setGoToProduct(true);
  }

  if (goToProduct) {
    router.push("/products");
  }

  async function uploadImages(ev) {
    const files = ev.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();
      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("/api/upload", data);
      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  function updateImagesOrder(images) {
    setImages(images);
  }

  function setProductProp(propName, value) {
    setProductProperties((prev) => {
      const newProductProps = { ...prev };
      newProductProps[propName] = value;
      return newProductProps;
    });
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({ _id }) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while (catInfo?.parent?._id) {
      const parentCat = categories.find(({ _id }) => _id === catInfo?.parent?._id);
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
    <form onSubmit={saveProduct}>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="product name"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />

      <label>Category</label>
      <select value={category} onChange={(ev) => setCategory(ev.target.value)}>
        <option value="">Uncategorized</option>
        {categories.length > 0 &&
          categories.map((c) => (
            <option value={c._id} key={c._id}>
              {c.name}
            </option>
          ))}
      </select>

      {propertiesToFill.length > 0 &&
        propertiesToFill.map((p) => (
          <div className="" key={p.name}>
            <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
            <div>
              <select
                value={productProperties[p.name]}
                onChange={(ev) => setProductProp(p.name, ev.target.value)}
              >
                {p.values.map((v) => (
                  <option value={v} key={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

      <label>Photos</label>
      <div className="mb-2 flex flex-wrap gap-1">
        <ReactSortable 
        list={images} 
        className="flex flex-wrap gap-1" 
        setList={updateImagesOrder}>
          {!!images?.length &&
            images.map((link) => (
              <div key={link} className="h-24 bg-white p-1 shadow-sm rounded-sm border border-gray-200">
                <img src={link} alt="" className="rounded-lg" />
              </div>
            ))}
        </ReactSortable>
        {isUploading && (
          <div className="h-24 flex items-center">
            <Spinner />
          </div>
        )}
        <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <div>Add image</div>
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
      </div>

      <label>Description</label>
      <textarea placeholder="description" value={description} onChange={(ev) => setDescription(ev.target.value)}></textarea>

      <label>Price (in INR)</label>
      <input type="number" placeholder="price" value={price} onChange={(ev) => setPrice(ev.target.value)} />

      <button type="submit" className="btn-primary">
        Save
      </button>

      {/* Render the ToastContainer at the top of your component */}
      <ToastContainer />
    </form>
  );
}
