<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 col-sm-12 mx-auto">
        <div class="card">
          <div class="card-body">
            <div class="text-center mb-5">
              <img src="../assets/img/icon.png" height="48" class='mb-4'>
              <h3>AWS Selling Partner Configuration</h3>
              <p>
                Please fill the form below to save your keys and credentials.
              </p>
            </div>
            <form>
              <div class="row">
<!--                <div class="divider">-->
<!--                  <div class="divider-text">AWS Selling Partner Configuration</div>-->
<!--                </div>-->

                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-0">Selling Partner Client ID</label>
                    <input type="text" id="key-0"
                           class="form-control"
                           v-model="awsConfig.SELLING_PARTNER_APP_CLIENT_ID"
                           name="key-0">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-1">Selling Partner Client Secret</label>
                    <input type="text" id="key-1"
                           class="form-control"
                           v-model="awsConfig.SELLING_PARTNER_APP_CLIENT_SECRET"
                           name="key-1">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-2">Access Key ID</label>
                    <input type="text" id="key-2"
                           class="form-control"
                           v-model="awsConfig.AWS_SELLING_PARTNER_ACCESS_KEY_ID"
                           name="key-2">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-3">Secret Access Key</label>
                    <input type="text" id="key-3"
                           class="form-control"
                           v-model="awsConfig.AWS_SELLING_PARTNER_SECRET_ACCESS_KEY"
                           name="key-3">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-4">Selling Partner Role ARN</label>
                    <input type="text" id="key-4"
                           class="form-control"
                           v-model="awsConfig.AWS_SELLING_PARTNER_ROLE"
                           name="key-4">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-5">AWS Refresh Token*</label>
                    <input type="text" id="key-5"
                           class="form-control"
                           v-model="awsConfig.AWS_REFRESH_TOKEN"
                           name="key-5">
                  </div>
                </div>
              </div>
              <div class="clearfix">
                <button class="btn btn-primary float-right"
                        v-text="loading ? 'Saving...' : 'Save'">
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
  name: 'ConfigurationFormAws',
  data() {
    return {
      awsConfig: {
        SELLING_PARTNER_APP_CLIENT_ID: '',
        SELLING_PARTNER_APP_CLIENT_SECRET: '',
        AWS_SELLING_PARTNER_ACCESS_KEY_ID: '',
        AWS_SELLING_PARTNER_SECRET_ACCESS_KEY: '',
        AWS_SELLING_PARTNER_ROLE: '',
        AWS_REFRESH_TOKEN: '',
      },
      loading: false,
    };
  },
};
</script>
