<template>
    <div class="card-header border-0 bg-transparent">
        <div class="row mt-2">
            <div class="col-2 col-sm-1">
                <img class="avatar-img" :src="header.picture" alt="">
            </div>
            <div class="col-8 col-sm-9">
                <h4 class="card-header-title m-0">
                    <router-link class="link-profile" to="/profile">{{ header.name }}</router-link>
                  </h4>
                <small class="text-muted card-header-subTitle">hace 10 minutos</small>
            </div>
            <div class="col-1">
                <button class="btn d-flex align-items-center more-btn">
                    <span class="material-icons-round text-dark">more_horiz</span>
                </button>
            </div>

        </div>

    </div>
</template>


<script>
export default {
    name: "CardHeader",
    props: ["header"]
}
</script>


<style>
.avatar-img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
}

.card-header {
    padding: 0.5rem 1rem;
    padding-bottom: 0;
}

.card-header-title {
    line-height: 0.7;
}

.card-header-subTitle {
    font-size: 0.8em;
}

.more-btn{
  color: black;
  border-radius: 50%;
  padding: 0.5em;
  margin: 0.3em ;
}

.link-profile{
    text-decoration: none;
    color: black;
}

.link-profile:hover{
    background-color: transparent;
}

@media (min-width: 576px) {
    .card-header .col-8 {
        margin-left: 1em;
    }
}
</style>