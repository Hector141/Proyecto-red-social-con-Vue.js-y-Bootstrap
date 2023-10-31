<template>
    <ul class="list-group">
        <li class="list-group-item text-muted">A 12 personas le gusto esta publicación</li>
        <li class="list-group-item">
            <div class="row">
            <div class="col d-grid">
                <button class="btn d-flex justify-content-center align-items-center gap-2 px-0">
                    <span class="material-icons-round span-mc ">thumb_up</span>
                    Me gusta
                </button>
            </div>
            <div class="col d-grid">
                <button class="btn d-flex justify-content-center align-items-center gap-2 px-0">
                    <span class="material-icons-round span-mc ">chat_bubble_outline</span>
                    comentar
                </button>
            </div>
        </div>
        </li>

    </ul>
</template>

<script>
export default {
    name: "ListGroup"
}
</script>

<style scoped>
.btn {
    font-weight: bold;
}



.span-mc{
    color: black;
    background-color: transparent;
}
.btn:hover .span-mc {
    color: rgba(0, 26, 255, 0.884);
   
}

.btn:hover{
    color:rgba(0, 26, 255, 0.884); ;
}
</style>