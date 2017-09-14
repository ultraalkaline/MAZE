function Drop() {
   this.x = random(width);
   this.y = random(-1000, -100);
   this.z = random(0, 20);
   this.ySpeed = map(this.z, 0, 20, 0.5, 1);
   this.length = map(this.z, 0, 20, 10, 60);
   this.stopped = false;
   this.g = map(this.z, 0, 20, 0, 0.2);

   this.fall = function() {
      this.y = this.y + this.ySpeed;
      if (!this.stopped) {
         this.ySpeed = this.ySpeed + this.g;
      } else {
         if (this.ySpeed > 0 && this.g != 0) {
            this.ySpeed = this.ySpeed - this.g*2;
         } else {
            this.ySpeed = 0;
         }
      }

      if (this.y > height) {
         this.y = random(-1000, -100);
         if (!this.stopped) {
            this.ySpeed = map(this.z, 0, 20, 2, 10);
         }
      }
   }

   this.show = function() {
      var thick = map(this.z, 0, 20, 0.5, 1.5);
      strokeWeight(thick);
      stroke(120, 120, 120, 100);
      line(this.x, this.y, this.x, this.y + this.length);
   }

   this.stop = function(bool) {
      this.stopped = bool;
   }
}
