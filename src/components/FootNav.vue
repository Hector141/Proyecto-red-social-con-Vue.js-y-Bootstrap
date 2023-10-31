<template>
    <footer class="mt-5">
        <ul class="list-group list-group-flush list-group-horizontal text-center mb-0">
            <li class="list-group-item">
                <router-link class="router-link" to="/">Home</router-link>
            </li>
            <li class="list-group-item">
                <router-link class="router-link" to="/about">About</router-link>
            </li>
            <li class="list-group-item">
                <router-link class="router-link" to="/posts">Post</router-link>
            </li>
        </ul>
        <img src="../assets/logo.svg" class="foot-logo" alt="logo">
        <div class="text-black-50 text-center">Facelook &#169; 2023</div>
    </footer>
</template>

<script>
</script>

<style scoped>
.foot-logo{
    margin: 0 auto;
    display: block;
    max-width: 55px;
}

footer{
    width: 100%;
}
.text-center{
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
}
.list-group{
    justify-content: center;
}
.list-group-item{
    border: none;
}
.router-link{
    text-decoration: none;
}


@media (min-width: 768px){
    footer{
        position: absolute;
    }
    .foot-logo{
        position: relative;
        bottom: 0;
    }
}

</style>