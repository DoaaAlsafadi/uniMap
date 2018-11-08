import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data'
declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  universities: any;
  colleges: any;
  origin: any = {
    name: null,
    lat: null,
    lng: null
  };
  destination: any = {
    name: null,
    lat: null,
    lng: null
  };
  directionsDisplay: any;
  directionsService: any;
  map: any;
  travelMode: any ='WALKING';
  travelModes = [{ name: 'DRIVING' }, { name: 'WALKING' }]
  pos: any = {
    lat: null,
    lng: null
  };
  uniName: any;

  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
    this.showMap();
    console.log(this.pos.lat);

    this.universities = [
      {
        name: 'الجامعة الاردنية',
        icon:'../../assets/icon/universityOfJordan.jpg',
        colleges: [
          {
            name: "Current Location",
            lat: this.pos.lat,
            lng: this.pos.lng
          },
          {
            name: "عيادة الطلبة",
            lat: 32.013868,
            lng: 35.870553
          },
          {
            name: 'كلية الهندسة',
            lat: 32.010695,
            lng: 35.875766
          },
          {
            name: 'مسجد الجامعة',
            lat: 32.018019,
            lng: 35.867497
          },
          {
            name: 'كلية العلوم',
            lat: 32.020233,
            lng: 35.871639
          },
          {
            name: 'مجمع القاعات التدريسية للكليات الانسانية',
            lat: 32.019131,
            lng: 35.870889
          },
          {
            name: 'مجمع القاعات التدريسية للكليات العلمية',
            lat: 32.014166,
            lng: 35.874075
          },
          {
            name: 'كلية الحقوق',
            lat: 32.018702,
            lng: 35.872313
          },
          {
            name: 'ٍStudent.com',
            lat: 32.017942,
            lng: 35.871954
          },
          {
            name: 'ٍمجمع اللغات',
            lat: 32.017501,
            lng: 35.869266
          },
          {
            name: 'ٍكلية الاداب',
            lat: 32.017931,
            lng: 35.870562
          },
          {
            name: 'ٍكلية الشريعة',
            lat: 32.017471,
            lng: 35.872783
          },
          {
            name: 'ٍالبنك الأهلي-ATM',
            lat: 32.016985,
            lng: 35.871133
          },
          {
            name: 'ٍالبنك العربي-ATM',
            lat: 32.015957,
            lng: 35.870624
          },
          {
            name: 'ٍالبنك الراجحي-ATM',
            lat: 32.013591,
            lng: 35.873000
          },
          {
            name: ' بنك الاتحاد-ATM',
            lat: 32.014733,
            lng: 35.869573
          },
          {
            name: 'كلية تكنولوجيا المعلومات',
            lat: 32.014260,
            lng: 35.872769
          },
          {
            name: 'مركز الحاسوب',
            lat: 32.014265,
            lng: 35.875119
          },
          {
            name: 'Milk Bar',
            lat: 32.014742,
            lng: 35.871713
          },
          {
            name: 'مدرج الحسن بن طلال',
            lat: 32.014528,
            lng: 35.869953
          },
          {
            name: 'مكتبة الجامعة',
            lat: 32.015451,
            lng: 35.869975
          },
          {
            name: 'عمادة شؤون الطلبة',
            lat: 32.014337,
            lng: 35.870361
          },
          {
            name: 'صاج # ',
            lat: 32.018303,
            lng: 35.872109
          },
          {
            name: 'كلية التربوية',
            lat: 32.020427,
            lng: 35.871391
          },
          {
            name: 'بنك القاهرة عمان',
            lat: 32.014041,
            lng: 35.871734
          },
          {
            name: 'كلية طب الأسنان',
            lat: 32.007833,
            lng: 35.875932
          },
          {
            name: 'كلية العلوم والتأهيل',
            lat: 32.007001,
            lng: 35.875784
          },
          {
            name: 'مركز دراسات المرأة',
            lat: 32.007001,
            lng: 35.875784
          },
          {
            name: 'كلية الفنون والتصميم',
            lat: 32.006505,
            lng: 35.877064
          },
          {
            name: 'البوابة الجنوبية',
            lat: 32.005393,
            lng: 35.875819
          },
          {
            name: 'كلية الصيدلة',
            lat: 32.008286,
            lng: 35.876066
          },
          {
            name: 'كلية التمريض',
            lat: 32.008261,
            lng: 35.875653
          },
          {
            name: 'كلية الزراعة',
            lat: 32.011563,
            lng: 35.873489
          },
          {
            name: 'العلوم-village',
            lat: 32.013386,
            lng: 35.873052
          },

        ]
      },
      {
        name: 'الجامعة الهاشمية',
        icon:'../../assets/icon/hashimateUniversity.jpeg',
        colleges: [
          {
            name: "Current Location",
            lat: this.pos.lat,
            lng: this.pos.lng
          },
          {
            name: "كلية الاقتصاد",
            lat: 32.104664,
            lng: 36.185509
          },
          {
            name: 'كلية الطب',
            lat: 32.106071,
            lng: 36.185527
          },
          {
            name: 'مكتبة عبد الحميد شومان',
            lat: 32.104159,
            lng: 36.186480
          },
          {
            name: 'القبول والتسجيل',
            lat: 32.103597,
            lng: 36.185252
          },
          {
            name: 'ادارة الجامعة',
            lat: 32.101811,
            lng: 36.185595
          },
          {
            name: 'كلية الهندسة',
            lat: 32.101370,
            lng: 36.187367
          },
          {
            name: 'كلية العلوم والاداب',
            lat: 32.103024,
            lng: 36.187217
          },
          {
            name: 'المشاغل الهندسية',
            lat: 32.100320,
            lng: 36.187392
          },
          {
            name: 'وحدة القبول والتسجيل',
            lat: 32.103499,
            lng: 36.185891
          },
          {
            name: 'مكتبة الجامعة',
            lat: 32.103499,
            lng: 36.185891
          },
          {
            name: 'كلية الطب',
            lat: 32.106052,
            lng: 36.186091
          },
          {
            name: 'المركز الصحي',
            lat: 32.106742,
            lng: 36.185168
          },
          {
            name: 'مسجد الجامعة',
            lat: 32.106770,
            lng: 36.183033
          },
          {
            name: 'مسجد الجامعة',
            lat: 32.106770,
            lng: 36.183033
          },
        ]
      },
    ]

  //   $('#myDropdown').ddslick({
  //     data:this.universities,
  //     width:300,
  //     selectText: "Select your preferred social network",
  //     imagePosition:"right",
  //     onSelected: function(selectedData){
  //         //callback function: do something with selectedData;
  //         console.log(selectedData,"iiiiiiiiiiii");

  //     }
  // });
  }

  showMap() {
    const location = new google.maps.LatLng(31.947389, 35.926646);
    const options = {
      center: location,
      zoom: 10,
      disableDefaultUI: true, // a way to quickly hide all controls
      // mapTypeControlOptions: {
      //   mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID]
      // }, // here´s the array of controls
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    console.log(this.origin, "  mappppp")
    const infoWindow = new google.maps.InfoWindow;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsDisplay.setMap(this.map);
    this.addMarkers(location, this.map)
    console.log();

    // (document.getElementsByClassName('header header-md')[1] as HTMLElement).style.backgroundColor = '#000010';
    // (document.getElementsByClassName('header header-md')[1] as HTMLElement).style.color = '#000010'

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      var that = this;
      navigator.geolocation.watchPosition(function (position) {
        that.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(that.pos);
        infoWindow.setContent('Location found.');
        console.log(that.pos, "   pos ..........");

      }, function () {
        this.handleLocationError(true, infoWindow, this.map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infoWindow, this.map.getCenter());
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(this.map);
  }
  // addPanorama() {
  //   var panorama = new google.maps.StreetViewPanorama(
  //     document.getElementById('pano'), {
  //       position: this.origin,
  //       pov: {
  //         heading: 34,
  //         pitch: 10
  //       }
  //     });
  //   this.map.setStreetView(panorama);
  // }

  addMarkers(position, map) {
    return new google.maps.Marker({
      position,
      map,
    })
  }

  calculateAndDisplayRoute(directionsService, directionsDisplay) {

    directionsService.route({
      origin: { lat: this.origin.lat, lng: this.origin.lng },
      destination: { lat: this.destination.lat, lng: this.destination.lng },
      travelMode: this.travelMode
    }, function (response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        // this.addPanorama();
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  changeUniversity() {
    console.log(this.uniName, " /n/n/n/n//n/n university");
    this.universities.forEach(element => {
      if (element.name === this.uniName) {
        this.colleges = element.colleges;
      }
    });
    console.log(this.colleges, " yyyyyyyyyyyyyyyy");

    if (this.uniName && this.origin.lat && this.destination.lat && this.travelMode) {
      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)
    }
  }

  changeOrigin() {
    console.log(this.origin, " /n/n/n/n//n/n origin");
    this.colleges.forEach(element => {
      if (element.name === this.origin.name) {
        this.origin = element;
      }
    });
    if (this.origin.name === "Current Location") {
      this.origin.lat = this.pos.lat;
      this.origin.lng = this.pos.lng;
    }
    console.log(this.origin, " /n/n/n/n//n/n origin");
    if (this.uniName && this.origin.lat && this.destination.lat && this.travelMode) {
      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)
    }
  }

  changeDestination() {
    console.log(this.destination, " /n/n/n/n//n/n destination");
    this.colleges.forEach(element => {
      if (element.name === this.destination.name) {
        this.destination = element;
      }
    });
    if (this.destination.name === "Current Location") {
      this.destination.lat = this.pos.lat;
      this.destination.lng = this.pos.lng;
    }
    console.log(this.destination, " /n/n/n/n//n/n destination");

    console.log(this.uniName, this.origin.lat, this.destination, this.travelMode);

    if (this.uniName && this.origin.lat && this.destination.lat && this.travelMode) {
      this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay)
    }
  }

  openNav() {
   console.log(document.getElementsByClassName('header header-md')[1]);

    if(document.getElementById("mySidenav").style.width == "250px"){
      document.getElementById("mySidenav").style.width = "0";
    }else{
      document.getElementById("mySidenav").style.width = "250px";
    }
  }

  /* Set the width of the side navigation to 0 */
  // closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }

  walk() {
   var walk =  document.getElementById('walk');
   walk.style.webkitFilter = 'sepia(100%)'
   walk.style.filter = 'sepia(100%)'
   walk.className += ' animated pulse infinite'
   var car =  document.getElementById('car');
    car.className = ' img-fluid'
    this.travelMode = 'WALKING'
  }

  car() {
    var car =  document.getElementById('car');
    car.className += ' animated pulse infinite'
    var walk =  document.getElementById('walk');
   walk.className = 'img-fluid'
   this.travelMode = 'DRIVING'

   }
}
