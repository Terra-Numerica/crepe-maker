<template setup>
    <div class="class"></div>
</template>
<script setup>

import { ref, watch } from 'vue';

const props = defineProps({
  isVisible: Boolean,
  animationDuration: Number,
  animationDelay: Number,
});

// Use a ref to track a unique key for the animation trigger
const animationKey = ref(0);

// Watch the visibility prop and increment the key to trigger animation
watch(() => props.isVisible, () => {
  animationKey.value++;
});

</script>
<style lang="scss">

@keyframes bounceInLeft {
	0%,
  60%,
  75%,
  90%,
  100% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate(-3000px, 0);
  }

  75% {
  	opacity: 1;
    transform: translate(20px, 0);
  }

  100% {
  	opacity: 1;
    transform: translate(0, 0);
  }
}

@keyframes wheelSpin {
	0% {
transform:rotate(0deg);
  }
  100% {
  transform:rotate(640deg); 
  }
}

[class|="confetti"] {
  position: absolute;
}



/* Config */
$elementCount: 50;
$colors: (#03a561, #00a4ff, #f04813, #ff04d2, #fed500);
$shapes: (0, 1, 2);

@for $i from 0 through $elementCount {
  $w: random(18);
  $l: random(175);

  .confetti-left-#{$i},
  .confetti-right-#{$i} {
    $shape: nth($shapes, random(3));
    $color: nth($colors, random(5));
    @if ($shape==0) {
      width: #{$w*0.6}px;
      height:#{$w*0.6}px;
      border-radius: 50%;
      overflow: hidden;
      background-color: $color;
    }
    @else if ($shape==1) {
      background-color: transparent;
      border-bottom: unquote(($w*0.5) + 'px solid ' + $color);
      border-left: unquote(calc(($w*0.5) / 2) + 'px solid transparent');
      border-right: unquote(calc(($w*0.5) / 2) + 'px solid transparent');
      height: 0;
      width: #{$w*0.5}px;
    }
    @else {
      width: #{$w}px;
      height:#{$w*0.4}px;
      background-color: $color;
    }
    top: calc(25% - #{$w}px);
    left: calc(50% - #{$w*0.3}px);
    opacity: 0;
    transform: translate(0px, 0px) rotate(0deg);
  }
  .confetti-left-#{$i} {
    animation: drop-left-#{$i} unquote(0.1+random()+"s") unquote(0.5+random()+"s") forwards;
  }
  .confetti-right-#{$i} {
    animation: drop-right-#{$i} unquote(0.1+random()+"s") unquote(0.5+random()+"s") forwards;
  }
  @keyframes drop-left-#{$i} {
    $rot: random(360);
    $val: calc(random(10) / 4);
    $opacity: random() + 0.5;
    0.0000% {
      transform: translate(#{$val*0.0}px, #{$val*0.0}px) rotate(#{$rot}deg);
      opacity: $opacity;
    }
    10.7882% {
      transform: translate(#{$val*12.6}px, -#{$val*30.0}px) rotate(#{$rot}deg);
      opacity: $opacity;
    }
    21.2266% {
      transform: translate(#{$val*28.0}px, -#{$val*57.6}px) rotate(#{$rot}deg);
      opacity: $opacity;
    }
    30.4208% {
      transform: translate(#{$val*46.1}px, -#{$val*78.7}px) rotate(#{$rot}deg);
      opacity: $opacity;
    }
    34.4519% {
      transform: translate(#{$val*56.2}px, -#{$val*85.6}px) rotate(#{$rot}deg);
      opacity: $opacity;
    }
    38.2085% {
      transform: translate(#{$val*66.9}px, -#{$val*89.4}px) rotate(#{$rot}deg);
      opacity: $opacity;
    }
		41.9607% {
		  transform: translate(#{$val*78.2}px, -#{$val*89.6}px) rotate(#{$rot}deg);
		  opacity: $opacity;
		}

		46.1202% {
		  transform: translate(#{$val*90.2}px, -#{$val*85.8}px) rotate(#{$rot}deg);
		  opacity: $opacity;
		}

		51.1287% {
		  transform: translate(#{$val*102.8}px, -#{$val*77.4}px) rotate(#{$rot}deg);
		  opacity: $opacity;
		}

		57.3654% {
		  transform: translate(#{$val*116.0}px, -#{$val*64.0}px) rotate(#{$rot}deg);
		  opacity: $opacity;
		}

		65.1344% {
		  transform: translate(#{$val*129.9}px, -#{$val*45.0}px) rotate(#{$rot}deg);
		  opacity: $opacity;
		}

		74.6872% {
		  transform: translate(#{$val*144.3}px, -#{$val*20.0}px) rotate(#{$rot}deg);
		  opacity: $opacity;
		}

		86.2425% {
		  transform: translate(#{$val*159.4}px, #{$val*11.5}px) rotate(#{$rot}deg);
		  opacity: $opacity*0.5;
		}

		100.0000% {
		  transform: translate(#{$val*175.0}px, #{$val*50.0}px) rotate(#{$rot}deg);
		  opacity: 0;
		}
	}

	@keyframes drop-right-#{$i} {
	  $rot: random(360);
	  $val: calc(random(10) / 4);
	  $opacity: random() + 0.5;
	  0.0000% {
	    transform: translate(#{$val*0.0}px, #{$val*0.0}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  10.7882% {
	    transform: translate(-#{$val*12.6}px, -#{$val*30.0}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  21.2266% {
	    transform: translate(-#{$val*28.0}px, -#{$val*57.6}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  30.4208% {
	    transform: translate(-#{$val*46.1}px, -#{$val*78.7}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  34.4519% {
	    transform: translate(-#{$val*56.2}px, -#{$val*85.6}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  38.2085% {
	    transform: translate(-#{$val*66.9}px, -#{$val*89.4}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  41.9607% {
	    transform: translate(-#{$val*78.2}px, -#{$val*89.6}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  46.1202% {
	    transform: translate(-#{$val*90.2}px, -#{$val*85.8}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  51.1287% {
	    transform: translate(-#{$val*102.8}px, -#{$val*77.4}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  57.3654% {
	    transform: translate(-#{$val*116.0}px, -#{$val*64.0}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  65.1344% {
	    transform: translate(-#{$val*129.9}px, -#{$val*45.0}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  74.6872% {
	    transform: translate(-#{$val*144.3}px, -#{$val*20.0}px) rotate(#{$rot}deg);
	    opacity: $opacity;
	  }
	  86.2425% {
	    transform: translate(-#{$val*159.4}px, #{$val*11.5}px) rotate(#{$rot}deg);
	    opacity: $opacity*0.5;
	  }
	  100.0000% {
	    transform: translate(-#{$val*175.0}px, #{$val*50.0}px) rotate(#{$rot}deg);
	    opacity: 0;
	  }
	}

}

</style>