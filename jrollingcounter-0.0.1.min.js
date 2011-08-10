/*!
 * jQuery Rolling Counter
 * 
 * Copyright 2011, Yuriy Zisin
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
Counter=function(h,e){this.options={minDigitSpinDelay:200,maxDigitSpinDelay:800,spinTime:5000,stopDigit:0,startDigit:0,onFinish:null};$.extend(this.options,e);this.$object=h;this.$image=$("img",h);this.digitHeight=h.height();this.currentDigit=this.options.startDigit;this.currentDelay=this.options.minDigitSpinDelay;this.distance=0;var i=1000/this.options.maxDigitSpinDelay;var f=1000/this.options.minDigitSpinDelay;var b=this.options.spinTime/1000;var d=(i-f)/b;var g=(f*b)+((d*Math.pow(b,2))/2);var c=Math.floor(g/10);g=c*10-this.options.startDigit+this.options.stopDigit;this.targetDistance=g;this.delay=(((2*this.options.spinTime)/g)-2*this.options.minDigitSpinDelay)/(g-1);return this};Counter.prototype.run=function(){var a=function(b){return function(){b.currentDigit++;if(b.currentDigit>10){b.$image.animate({marginTop:0},1);b.currentDigit=1}b.currentDelay+=b.delay;b.distance++;if(b.distance<=b.targetDistance){b.run()}else{if(b.options.onFinish){b.options.onFinish(b.$object)}}}}(this);this.$image.animate({marginTop:-(this.currentDigit*this.digitHeight)},this.currentDelay,"linear",a);return this};$.fn.extend({spinCounter:function(b,a){this.each(function(){$.extend(b,{onFinish:a});new Counter($(this),b).run()});return this}});