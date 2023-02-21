import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private service: MovieApiServiceService) {}

  bannerResult: any = [];
  trendingMovieResult: any = [];
actionMovieResult: any = [];
adventureMovieResult: any = [];
sciFiMovieResult: any = [];
documentaryMovieResult: any = [];
comedyMovieResult: any = [];
animationMovieResult: any = [];
thrillerMovieResult: any = [];


  ngOnInit(): void {
    this.bannerData();
    this.trendingData()
    this.actionMovieData();
    this.adventureMovieData();
    this.sciFiMovieData();
    this.documentaryMovieData();
    this.comedyMovieData();
    this.animationMovieData();
    this.thrillerMovieData();
  }

  //bannerData
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'result');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trending result');
      this.trendingMovieResult = result.results;
    });
  }

  actionMovieData() {
    this.service.fetchActionMovies().subscribe((result) => {
      // console.log(result, 'action result');
      this.actionMovieResult = result.results;
  })
}

adventureMovieData() {
  this.service.fetchAdventureMovies().subscribe((result) => {
    // console.log(result, 'adventure result');
    this.adventureMovieResult = result.results;
})
}

animationMovieData() {
  this.service.fetchAnimationMovies().subscribe((result) => {
    // console.log(result, 'animation result');
    this.animationMovieResult = result.results;
})
}

comedyMovieData() {
  this.service.fetchComedyMovies().subscribe((result) => {
    // console.log(result, 'comedy result');
    this.comedyMovieResult = result.results;
})
}

sciFiMovieData() {
  this.service.fetchSciFiMovies().subscribe((result) => {
    // console.log(result, 'scifi result');
    this.sciFiMovieResult = result.results;
})
}

documentaryMovieData() {
  this.service.fetchDocumentaryMovies().subscribe((result) => {
    console.log(result, 'documentary result');
    this.documentaryMovieResult = result.results;
})
}

thrillerMovieData() {
  this.service.fetchThrillerMovies().subscribe((result) => {
    console.log(result, 'thriller result');
    this.thrillerMovieResult = result.results;
})
}
}
