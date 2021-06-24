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
                           v-model="awsConfig.sellingPartnerAppClientId"
                           name="key-0">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-1">Selling Partner Client Secret</label>
                    <input type="text" id="key-1"
                           class="form-control"
                           v-model="awsConfig.sellingPartnerAppClientSecret"
                           name="key-1">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-2">Access Key ID</label>
                    <input type="text" id="key-2"
                           class="form-control"
                           v-model="awsConfig.awsSellingPartnerAccessKeyId"
                           name="key-2">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-3">Secret Access Key</label>
                    <input type="text" id="key-3"
                           class="form-control"
                           v-model="awsConfig.awsSellingPartnerSecretAccessKey"
                           name="key-3">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-4">Selling Partner Role ARN</label>
                    <input type="text" id="key-4"
                           class="form-control"
                           v-model="awsConfig.awsSellingPartnerRole"
                           name="key-4">
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="form-group">
                    <label for="key-5">AWS Refresh Token*</label>
                    <input type="text" id="key-5"
                           class="form-control"
                           v-model="awsConfig.awsRefreshToken"
                           name="key-5">
                  </div>
                </div>
              </div>
              <div class="clearfix">
                <button class="btn btn-primary float-right"
                        @click.prevent="onSubmit"
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
import { required } from 'vuelidate/lib/validators';
import configService from '../services/usersConfig';

export default {
  name: 'ConfigurationFormAws',
  computed: {
    userId() {
      // eslint-disable-next-line no-underscore-dangle
      if (this.$store.getters.getUser) return this.$store.getters.getUser._id;
      return null;
    },
  },
  data() {
    return {
      awsConfig: {
        sellingPartnerAppClientId: '',
        sellingPartnerAppClientSecret: '',
        awsSellingPartnerAccessKeyId: '',
        awsSellingPartnerSecretAccessKey: '',
        awsSellingPartnerRole: '',
        awsRefreshToken: '',
      },
      loading: false,
    };
  },
  validations: {
    awsConfig: {
      sellingPartnerAppClientId: {
        required,
      },
      sellingPartnerAppClientSecret: {
        required,
      },
      awsSellingPartnerAccessKeyId: {
        required,
      },
      awsSellingPartnerSecretAccessKey: {
        required,
      },
      awsSellingPartnerRole: {
        required,
      },
      awsRefreshToken: {
        required,
      },
    },
  },
  methods: {
    onSubmit() {
      this.$v.awsConfig.$touch();
      if (this.$v.$invalid) {
        this.$store.dispatch('notify', {
          type: 'error',
          text: 'Validation Error',
          title: 'Please make sure to complete every field',
        });
        return false;
      }
      this.loading = true;
      const body = {
        userId: this.userId,
        ...this.awsConfig,
      };
      return configService.setUserConfig(body)
        .then((res) => {
          this.loading = false;
          console.log('SUCCESS: ', res);
          this.$store.dispatch('notify', {
            type: 'success',
            text: 'Your settings were saved successfully!',
            title: 'Yay!',
          });
        })
        .catch((err) => {
          this.loading = false;
          console.log('error: ', err);
          this.$store.dispatch('notify', {
            type: 'error',
            text: err.message,
            title: 'Something wrong happened :/',
          });
        });
    },
    getUserConfigs() {
      if (this.userId) {
        configService.getUserConfig(this.userId)
          .then(({ data }) => {
            console.log('response: ', data);
            // eslint-disable-next-line prefer-destructuring
            this.awsConfig = data.data[0];
          })
          .catch(() => {
          });
      }
    },
  },
  async mounted() {
    this.getUserConfigs();
  },
};
</script>
