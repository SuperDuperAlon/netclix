import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  getMovieDetailsResult: any;
  getMovieVideoResult: any;
  getMovieCastResult: any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getParamId');

    this.getMovie(getParamId);
    this.getCast(getParamId);
    this.getVideo(getParamId);
  }

  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'Movie details');
      this.getMovieDetailsResult = result;
    });
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result, 'Movie video');
      result.results.forEach((el: any) => {
        if (el.type == 'Trailer') {
          this.getMovieVideoResult = el.key;
        }
      });
    });
  }

  getCast(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      console.log(result, 'Movie cast');
      this.getMovieCastResult = result.cast;
    });
  }
}
