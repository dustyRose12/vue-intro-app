document.addEventListener("DOMContentLoaded", function(event) {
  var app = new Vue({
    el: '#app',
    data: {
      message: "Hey Vue how's it going?",
      reviews: [
                    {text: "I don't want to sound enamored, but I think Vue.js is pretty cool.",
                    rating: "4",
                    reviewer: "Bobby B"
                    },
                    {text: "Vue.js can kick react's butt",
                    rating: "5",
                    reviewer: "Stanis"
                    },
                    {text: "Vue.js, eh. it's ok.",
                    rating: "2",
                    reviewer: "Cersei"
                    }
                    ],
      newReviewText: "",
      newReviewRating: "",
      newReviewReviewer: ""
    },
    mounted: function() {

    },
    methods: {
      addReview: function() {
        if (this.newReviewText && this.newReviewRating && this.newReviewReviewer) {
          var newReview = {
                                      text: this.newReviewText,
                                      rating: this.newReviewRating,
                                      reviewer: this.newReviewReviewer
                                      };
          this.reviews.push(this.newReview);
          this.newReviewText = "";
          this.newReviewRating = "";
          this.newReviewReviewer= "";

        }
      },
      deleteReview: function(inputReview){
        var index = this.reviews.indexOf(inputReview);
        this.reviews.splice(index, 1);
      },
      isPositive: function(inputReview) {
        return inputReview.indexOf('stupid') === -1; //this checks if stupid is in the review. if it is, then the review is NOT positive. the review is added to the list of reviews, but doesn't show up.
      }
    },
    computed: {

    }
  });
});