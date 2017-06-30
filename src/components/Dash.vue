<template>
  <div class="wrapper">
    <header class="main-header">
      <a href="/" class="logo">
        <span class="logo-mini">
          <img src="../assets/logo.svg" alt="Logo" class="img-responsive center-block">
        </span>
        <div class="container logo-lg">
          <div class="pull-left image">
            <img src="../assets/logo.svg" alt="Logo" class="img-responsive">
          </div>
          <div class="pull-left info">Dashboard</div>
        </div>
      </a>
      <nav class="navbar navbar-static-top" role="navigation">
        <a href="javascript:;" class="sidebar-toggle" data-toggle="offcanvas" role="button" @click.prevent="sidebarToggle">
          <span class="sr-only">Toggle navigation</span>
        </a>
      </nav>
    </header>

    <aside class="main-sidebar">
      <section class="sidebar">
        <div class="user-panel">
          <div class="pull-left image">
            <img src="../assets/icon_user.png" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>User Name</p>
            <a href="/"><i class="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>

        <form @submit.prevent class="sidebar-form">
          <div class="input-group">
            <input type="text" name="search" class="search form-control" data-toggle="hideseek" placeholder="Search Menus" data-list=".sidebar-menu">
            <span class="input-group-btn">
                  <button type="submit" name="search" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>

        <ul class="sidebar-menu">
          <li class="treeview active">
            <router-link to="/">
              <i class="fa fa-dashboard"></i>
              <span>dashboard</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </router-link>
            <ul class="treeview-menu menu-open" style="display: block;">
              <li class="">
                <router-link to="/menu-one">
                  <i class="fa fa-circle-o"></i>
                  menu one
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>

    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <span>{{$route.name.toUpperCase() }}</span>
          <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="javascript:;"><i class="fa fa-home"></i>Home</a></li>
          <li class="active">{{$route.name.toUpperCase() }}</li>
        </ol>
      </section>

      <router-view></router-view>
    </div>

    <footer class="main-footer">
      <strong>Copyright &copy; {{year}} <a href="javascript:;">Baidu</a>.</strong> All rights reserved.
    </footer>
  </div>
</template>

<script>
  module.exports = {
    data () {
      return {}
    },

    computed: {
      year () {
        let y = new Date();
        return y.getFullYear()
      },

      path () {
        return location.pathname;
      }
    },

    methods: {
      sidebarToggle () {
        let collapse = localStorage.getItem('sidebarCollapse') || 'false';
        let regex = /true/;
        localStorage.setItem('sidebarCollapse', !regex.test(collapse));
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .user-panel {
    height: 4em;
  }

  .logo-lg {
    .image {
      width: 50px;
    }

    .img-responsive {
      padding: 5px;
    }

    img {
      max-width: 80%;
      margin-top: 10%;
    }
  }

  .logo-mini {
    .img-responsive {
      padding: 10px;
    }
  }

  .active a {
    background: #222d32 !important;
    border-left-color: #222d32 !important;
  }

  a.router-link-active {
    color: #fff !important;
    background: #1e282c !important;
    border-left-color: #605ca8 !important;
  }
</style>
