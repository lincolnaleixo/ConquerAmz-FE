<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 col-sm-12 mx-auto">
        <div class="card py-4">
          <div class="card-body">
            <div class="text-center mb-5">
              <img src="../../assets/img/icon.png" alt="icon" height="48" class='mb-4'>
              <h3>Forgot Password</h3>
              <p>Please enter your email to receive password reset link.</p>
            </div>
            <form>
              <div class="form-group">
                <label for="first-name-column">Email</label>
                <input type="email"
                       v-model="email"
                       id="first-name-column"
                       class="form-control"
                       name="fname-column">
              </div>
              <div class="clearfix">
                <button class="btn btn-primary float-right" @click.prevent="onSubmit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
