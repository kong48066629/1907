<template>
  <div class="about">
    <h1>影院</h1>
    <p class="mydl">sdfadf
    	<a href="#">aaa</a>
		<span>asdf
			<a href="#">ccc</a>
		</span>

    </p>
  </div>
</template>
<style lang="scss">
    @mixin yj($r:20px){
    	border-radius: $r;
    }
	$a:red;
	.bold{
		font-weight: bold;
		font-style: italic;
	}
	.mydl{
		background:$a;
		width:80*2/100+rem;
		height: 2rem;
		@include yj(5px);
		@extend .bold;
		&>a{
			color:yellow;
		}
		span{
			color:white;
		}
	}

</style>