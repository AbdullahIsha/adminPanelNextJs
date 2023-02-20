import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="main-container">
          <Sidebar />
          <div className="main-content">
            <div className="home-top-panel-out">
              <div className="home-top-panel">
                <h2>Dashboard</h2>
                <input type="text" placeholder="🔎︎ Search here..." />
                <select className="select-language">
                  <option value="eng">Eng (US)</option>
                  <option value="eng">Eng (US)</option>
                </select>
                <div className="travis-card">
                  <Image
                    src="/image/travis.png"
                    alt="travis_image"
                    height={54}
                    width={55}
                    className="travis_image"
                  />
                  <p>Travis Herron</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="justify-grid">
                <div className="product-card">
                  <a href="/products/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product1.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product2.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product3.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product4.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product5.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product6.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product1.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product2.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product3.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product4.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product5.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
                <div className="product-card">
                  <a href="/product?_id=624cd765a5d835001615a6d3">
                    <Image
                      alt="no_image"
                      src="/image/product6.png"
                      width={300}
                      height={300}
                    />
                  </a>
                  <h5>Swop NFC Band</h5>
                  <p>
                    Good sound quality and perfect bass provide to you and long
                    lasting.
                  </p>
                  <div className="product-price">
                    <label className="left">$29.99</label>
                    <label className="right">QTY: 23</label>
                  </div>
                </div>
              </div>
              <div className="add-product">
                <Link href="/add-product">Add products</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;