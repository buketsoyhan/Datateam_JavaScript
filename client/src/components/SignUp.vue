<template>
    <div class="vue-tempalte">
        <form>
            <h2 style="margin-left:20%">Sign Up</h2>

            <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>

            <div class="form-group">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label class="form-label">Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right"> Already registered <router-link :to="{name: 'login'}">sign in?</router-link>
            </p>
        </form>
    </div>
</template>
    <style>
        .vue-tempalte{
            margin-top: 10%;
            margin-left: 40%;
            margin-right:30%;
        }
        .form-label{
            font-size: 20px;
        }
        .btn{
            margin-left: 10%;
            font-size: 20px;
        }
        .forgot-password{
            font-size: 20px;
        }
    </style>
<script>

</script>