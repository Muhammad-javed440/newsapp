import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello ,I am a constructor.");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container bg-color-grey">
        <div className="container my-3">
          <h2 className="text-center">Beauty of Nature</h2>
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-wallpaper-27.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://wallpaperaccess.com/full/2416021.jpg"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="http://thewowstyle.com/wp-content/uploads/2015/01/3d-abstract_widewallpaper_nature-frame_47491.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="http://wonderfulengineering.com/wp-content/uploads/2016/01/nature-wallpapers-38.jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://jooinn.com/images/beauty-of-nature-24.jpg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://tse4.mm.bing.net/th?id=OIP.IDq8cZVcGfgwgkR1Bt0RywHaEo&pid=Api&P=0&h=220"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://tse3.mm.bing.net/th?id=OIP.m0R6zodOBREGljMNO0mIhQHaE8&pid=Api&P=0&h=220"
              />
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://tse4.mm.bing.net/th?id=OIP.OpCA4LlEWUn0iY-EaPUnCQHaEo&pid=Api&P=0&h=220"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://tse2.mm.bing.net/th?id=OIP.rjExmgmKTbfTBdhiO6pcZAAAAA&pid=Api&P=0&h=220"
              />
            </div>
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="myDescription"
                imageUrl="https://tse3.mm.bing.net/th?id=OIP.HfqrXYNx5KaAyNsfK3xu9wHaEK&pid=Api&P=0&h=220"
              />
            </div>
            <div className="row">
              <div className="col-md-4">
                <NewsItem
                  title="myTitle"
                  description="myDescription"
                  imageUrl="https://tse3.mm.bing.net/th?id=OIP.HfqrXYNx5KaAyNsfK3xu9wHaEK&pid=Api&P=0&h=220"
                />
              </div>
              <div className="col-md-4">
                <NewsItem
                  title="myTitle"
                  description="myDescription"
                  imageUrl="https://tse3.mm.bing.net/th?id=OIP.0iqvqUM-_MntTZp4CMBaigHaEK&pid=Api&P=0&h=220"
                />
              </div>
              <div className="col-md-4">
                <NewsItem
                  title="myTitle"
                  description="myDescription"
                  imageUrl="https://tse2.mm.bing.net/th?id=OIP.4bm_Kt0qEaw_fAms5rwo8wHaE8&pid=Api&P=0&h=220"
                />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-4">
                <NewsItem
                  title="myTitle"
                  description="myDescription"
                  imageUrl="https://tse1.mm.bing.net/th?id=OIP.qEPQskomTKlrF-3S_WSHjgHaEQ&pid=Api&P=0&h=220"
                />
              </div>
              <div className="col-md-4">
                <NewsItem
                  title="myTitle"
                  description="myDescription"
                  imageUrl="https://tse3.mm.bing.net/th?id=OIP.cKTq4enAGO_Wg_Omp0ysngAAAA&pid=Api&P=0&h=220"
                />
              </div>
              <div className="col-md-4">
                <NewsItem
                  title="myTitle"
                  description="myDescription"
                  imageUrl="https://tse2.mm.bing.net/th?id=OIP.DpcLyyRCeTWoiiMNdCTXxQHaEK&pid=Api&P=0&h=220"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
