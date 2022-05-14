import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    cateogry: "business",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    cateogry: PropTypes.string,
  };
  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Shane Warne memorial - watch & follow updates",
      description:
        "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
      url: "http://www.bbc.co.uk/sport/live/cricket/60916236",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      publishedAt: "2022-03-30T08:22:26.498888Z",
      content:
        "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    }
  ];

  capita = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: this.props.pageSize,
      totalResults: 0,
    };
    document.title = "News-Monkey : " + this.capita(this.props.cateogry);
  }

  async update() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogry}&apiKey=c267adf75aaf4e5fa96550c09110d8a1&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page,
      articles: parsedData.articles,
      loading: false
    });
  }
  async componentDidMount() {
    this.setState({ pageSize: this.props.pageSize });
    this.update();
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogry}&apiKey=c267adf75aaf4e5fa96550c09110d8a1&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData=await data.json();
    // this.setState({
    //   articles : parsedData.articles,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // });
  }

  handleonpre = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&cateogry=${this.props.cateogry}&apiKey=c267adf75aaf4e5fa96550c09110d8a1&page=${this.state.page-1}&pagesize=${this.state.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData=await data.json();
    // this.setState({
    //   page : this.state.page - 1,
    //   articles : parsedData.articles,
    //   loading:false
    // })
    this.setState({ page: this.state.page - 1 });
    this.update();
  };

  handleon = async () => {
    //   console.log(this.props.pageSize)
    //  if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.state.pageSize))){
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&cateogry=${this.props.cateogry}&apiKey=c267adf75aaf4e5fa96550c09110d8a1&page=${this.state.page + 1}&pagesize=${this.state.pageSize}`;
    //   this.setState({loading:true});
    //   let data= await fetch(url);
    //   let parsedData=await data.json();
    //   this.setState({
    //     page : this.state.page + 1,
    //     articles : parsedData.articles,
    //     loading:false
    //   })
    // }
    this.setState({ page: this.state.page + 1 });
    this.update();
  };

  fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cateogry}&apiKey=c267adf75aaf4e5fa96550c09110d8a1&page=${this.state.page}&pagesize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center" style={{ margin: "40px" }}>
          Top Headlines from {this.capita(this.props.cateogry)}
        </h1>
         {this.state.loading && <Spinner/>}
         <div className="container my-3">
           <div className="container row my-3">
             {!this.state.loading && this.state.articles.map((element)=>{
               return <div key={element.url}  className="col-md-4">
               <NewsItem title={element.title} source={element.source.name} author={element.author} date={element.publishedAt.slice(0,10)} desc={element.description} imurl={!element.urlToImage?"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/muwviywhhivlmbas_1650728227.jpeg":element.urlToImage} newurl={element.url}/>
             </div>  
             })}
           </div> 
           </div>
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        > }
          <div className="container my-3">
            <div className="container row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-4">
                    <NewsItem
                      title={element.title}
                      source={element.source.name}
                      author={element.author}
                      date={element.publishedAt.slice(0, 10)}
                      desc={element.description}
                      imurl={
                        !element.urlToImage
                          ? "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/muwviywhhivlmbas_1650728227.jpeg"
                          : element.urlToImage
                      }
                      newurl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        {</InfiniteScroll> */}
        { <div className="container">
          <div className="d-flex justify-content-between">
            <button type="button"
              disabled={this.state.page<=2}
              className="btn btn-primary"
              onClick={this.handleonpre}
            >
              Previous
            </button>
            <button type="button" disabled={this.state.page + 1 <Math.ceil(this.state.totalResults/this.state.pageSize)}
              className="btn btn-primary"
              onClick={this.handleon}
            >
              Next
            </button>
          </div>
        </div> }
      </>
    );
  }
}
