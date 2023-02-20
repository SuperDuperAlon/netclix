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
  ngOnInit(): void {
    this.bannerData();
    this.trendingData()
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
}
