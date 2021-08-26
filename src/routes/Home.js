import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  // 비동기 함수로 -> function()앞에 async 키워드
  // await 키워드 Promise기반 함수 앞에 놓음 -> 코드 완료까지 기다림
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=like_count"
    );
    this.setState({ movies, isLoading: false });  // movies:movies 로 써도 됨
  };
  componentDidMount(){
    this.getMovies();
  } 
  render(){
    const { isLoading, movies } = this.state;
    return (
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
            ) : (
              <div className="movies">
                {movies.map(movie => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                ))}
              </div>
            )}
        </section>
    );
  }
}

export default Home;
/*
Class Components and State
  function component는 function이고 return을 통해 screen에 표시
  class component는 class이고 react component로 부터 확장되고 screen에 표시
  react는 자동적으로 class component의 render method를 실행한다.

  state는 object이다.
  state에는 바꾸고 싶은 data를 넣는다.

  button에는 onClick이라는 prop이 기본적으로 있다.
  this.add()에서 ()는 즉시 함수를 호출해라는 것이고,
  this.add는 click했을 때만 함수를 호출하는 것이다.

Component Life Cycle
※ Mounting - component의 태어남
  constructor()
    -JavaScript에서 class를 만들 때 호출되는 것
    -coponent가 mount될 때 호출됨
  componentDidMount()
    -component가 처음 render될 때 호출됨

※ Updating
  componentDidUpdate()
    -componet가 업데이트될 때 호출됨

※ Unmounting - coponent가 죽는 것
  componentWillUnmount()
    -component가 떠날 때 호출됨

setState()를 호출 => component를 호출 => render를 호출
=> 업데이트 완료 후 coponentDidUpdate() 실행

state 선언은 필수가 아니다.
*/