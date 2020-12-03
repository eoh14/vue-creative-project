<template>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
        <a class="navbar-brand font-big" href="#">eriene oh</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse font-normal justify-content-end " id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item ">
                    <router-link class="nav-link"  :to = "'Home'">home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to = "'About'">about</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to= "'Philosophy'">life philosophy </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to= "'Stories'">submit a story </router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        dropdown
                    </router-link>
                    <!-- <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item font-normal" href="contact.html">contact</router-link>
                        <router-link class="dropdown-item font-normal" href="pricing.html">pricing</router-link> -->
                        <!-- <div class="dropdown-divider"></div>
                                <router-link class="dropdown-item" href="#">Something else here</router-link> -->
                    <!-- </div> -->
                </li>

            </ul>
            <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
            </form> -->
        </div>
    </nav>
</template>