import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //no didamicas primero y dinamicas despues
  @Get('filter')
  getProductFilter() {
    return { message: 'yo soy un filter' };
  }
  //recibir parametros ;
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return { message: `product ${productId}` };
  }
  //chocan id

  @Get()
  getProducts(2025-04-15 18:47:19.808 [info] > git show --textconv :app.py [2ms]
    2025-04-15 18:47:20.886 [info] > git ls-files --stage -- /home/julif/Escritorio/Reportes/app.py [5ms]
    2025-04-15 18:47:20.909 [info] > git cat-file -s afe46b41fd1a625d96a1b7720471b14c5cd89b52 [2ms]
    2025-04-15 18:47:20.935 [info] > git show --textconv :app.py [2ms]
    2025-04-15 19:01:48.849 [info] > git fetch [1273ms]
    2025-04-15 19:01:48.903 [info] > git ls-files --stage -- /home/julif/Escritorio/Reportes/app.py [59ms]
    2025-04-15 19:01:48.935 [info] > git config --get commit.template [39ms]
    2025-04-15 19:01:48.971 [info] > git cat-file -s afe46b41fd1a625d96a1b7720471b14c5cd89b52 [39ms]
    2025-04-15 19:01:48.995 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [27ms]
    2025-04-15 19:01:49.038 [info] > git show --textconv :app.py [43ms]
    2025-04-15 19:01:49.038 [info] > git status -z -uall [20ms]
    2025-04-15 19:01:49.041 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [4ms]
    2025-04-15 19:01:50.080 [info] > git ls-files --stage -- /home/julif/Escritorio/Reportes/app.py [3ms]
    2025-04-15 19:01:50.107 [info] > git cat-file -s afe46b41fd1a625d96a1b7720471b14c5cd89b52 [2ms]
    2025-04-15 19:01:50.137 [info] > git show --textconv :app.py [2ms]
    2025-04-15 19:01:50.355 [info] > git show -s --decorate=full --shortstat --format=%H%n%aN%n%aE%n%at%n%ct%n%P%n%D%n%B -z e35801c9040bdb0b9b63aed67be782670c97dd76 [12ms]
    2025-04-15 19:01:54.418 [info] > git log --format=%H%n%aN%n%aE%n%at%n%ct%n%P%n%D%n%B -z --shortstat --diff-merges=first-parent -n50 --skip=0 --topo-order --decorate=full --stdin [8ms]
    2025-04-15 19:01:55.094 [info] > git check-ignore -v -z --stdin [8ms]
    2025-04-15 19:02:26.941 [info] > git show --textconv HEAD:app.py [45ms]
    2025-04-15 19:02:26.945 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [7ms]
    2025-04-15 19:02:36.692 [info] > git add -A -- . [42ms]
    2025-04-15 19:02:36.723 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [35ms]
    2025-04-15 19:02:36.734 [info] > git -c user.useConfigOnly=true commit --quiet --allow-empty-message --file - [13ms]
    2025-04-15 19:02:36.770 [info] > git config --get commit.template [2ms]
    2025-04-15 19:02:36.871 [info] > git config --get commit.template [42ms]
    2025-04-15 19:02:36.877 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [9ms]
    2025-04-15 19:02:36.965 [info] > git status -z -uall [60ms]
    2025-04-15 19:02:36.965 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [32ms]
    2025-04-15 19:02:37.060 [info] > git merge-base refs/heads/main refs/remotes/origin/main [12ms]
    2025-04-15 19:02:37.091 [info] > git blame --root --incremental 81ce66c00b0e0753ceea1e3230e01560b08b6430 -- /home/julif/Escritorio/Reportes/app.py [86ms]
    2025-04-15 19:02:37.141 [info] > git diff --name-status -z --diff-filter=ADMR 0a8103de49a9b5ee7847d6b7fbd5dc4998406e47...refs/remotes/origin/main [50ms]
    2025-04-15 19:02:37.180 [info] > git log --format=%H%n%aN%n%aE%n%at%n%ct%n%P%n%D%n%B -z --shortstat --diff-merges=first-parent -n50 --skip=0 --topo-order --decorate=full --stdin [45ms]
    2025-04-15 19:02:37.190 [info] > git config --get commit.template [11ms]
    2025-04-15 19:02:37.226 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [5ms]
    2025-04-15 19:02:37.288 [info] > git status -z -uall [34ms]
    2025-04-15 19:02:37.290 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [6ms]
    2025-04-15 19:02:38.032 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [2ms]
    2025-04-15 19:02:38.077 [info] > git show --textconv HEAD:app.py [5ms]
    2025-04-15 19:02:40.562 [info] > git log --oneline --cherry main...main@{upstream} -- [101ms]
    2025-04-15 19:02:40.620 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [61ms]
    2025-04-15 19:02:41.613 [info] > git pull --tags origin main [1000ms]
    2025-04-15 19:02:41.613 [info] From https://github.com/JulySanMen/Reportesesta
     * branch            main       -> FETCH_HEAD
    hint: You have divergent branches and need to specify how to reconcile them.
    hint: You can do so by running one of the following commands sometime before
    hint: your next pull:
    hint:
    hint:   git config pull.rebase false  # merge
    hint:   git config pull.rebase true   # rebase
    hint:   git config pull.ff only       # fast-forward only
    hint:
    hint: You can replace "git config" with "git config --global" to set a default
    hint: preference for all repositories. You can also pass --rebase, --no-rebase,
    hint: or --ff-only on the command line to override the configured default per
    hint: invocation.
    fatal: Need to specify how to reconcile divergent branches.
    2025-04-15 19:02:41.662 [info] > git config --get commit.template [22ms]
    2025-04-15 19:02:41.666 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [3ms]
    2025-04-15 19:02:41.717 [info] > git status -z -uall [26ms]
    2025-04-15 19:02:41.719 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [6ms]
    2025-04-15 19:02:41.761 [info] > git config --get commit.template [5ms]
    2025-04-15 19:02:41.814 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [4ms]
    2025-04-15 19:02:41.905 [info] > git status -z -uall [38ms]
    2025-04-15 19:02:41.907 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [3ms]
    2025-04-15 19:02:44.524 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [5ms]
    2025-04-15 19:02:44.573 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [1ms]
    2025-04-15 19:02:44.656 [info] > git show --textconv HEAD:app.py [3ms]
    2025-04-15 19:02:44.699 [info] > git show --textconv HEAD:app.py [6ms]
    2025-04-15 19:02:47.003 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [10ms]
    2025-04-15 19:02:47.006 [info] > git config --get commit.template [53ms]
    2025-04-15 19:02:47.123 [info] > git status -z -uall [55ms]
    2025-04-15 19:02:47.124 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [4ms]
    2025-04-15 19:03:40.664 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [18ms]
    2025-04-15 19:03:43.387 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [6ms]
    2025-04-15 19:04:42.277 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [11ms]
    2025-04-15 19:04:46.372 [info] > git log --oneline --cherry main...main@{upstream} -- [53ms]
    2025-04-15 19:04:46.417 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [47ms]
    2025-04-15 19:04:47.575 [info] > git pull --tags origin main [1159ms]
    2025-04-15 19:04:47.575 [info] From https://github.com/JulySanMen/Reportesesta
     * branch            main       -> FETCH_HEAD
    hint: You have divergent branches and need to specify how to reconcile them.
    hint: You can do so by running one of the following commands sometime before
    hint: your next pull:
    hint:
    hint:   git config pull.rebase false  # merge
    hint:   git config pull.rebase true   # rebase
    hint:   git config pull.ff only       # fast-forward only
    hint:
    hint: You can replace "git config" with "git config --global" to set a default
    hint: preference for all repositories. You can also pass --rebase, --no-rebase,
    hint: or --ff-only on the command line to override the configured default per
    hint: invocation.
    fatal: Need to specify how to reconcile divergent branches.
    2025-04-15 19:04:47.633 [info] > git config --get commit.template [30ms]
    2025-04-15 19:04:47.666 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [34ms]
    2025-04-15 19:04:47.667 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [6ms]
    2025-04-15 19:04:47.719 [info] > git status -z -uall [27ms]
    2025-04-15 19:04:47.749 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [30ms]
    2025-04-15 19:04:47.756 [info] > git show --textconv HEAD:app.py [8ms]
    2025-04-15 19:04:49.633 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [14ms]
    2025-04-15 19:04:49.804 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [3ms]
    2025-04-15 19:04:49.846 [info] > git show --textconv HEAD:app.py [4ms]
    2025-04-15 19:04:49.895 [info] > git show --textconv HEAD:app.py [5ms]
    2025-04-15 19:04:50.646 [info] > git fetch [1080ms]
    2025-04-15 19:04:50.693 [info] > git config --get commit.template [8ms]
    2025-04-15 19:04:50.731 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [7ms]
    2025-04-15 19:04:50.839 [info] > git status -z -uall [71ms]
    2025-04-15 19:04:50.840 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [13ms]
    2025-04-15 19:04:51.875 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [3ms]
    2025-04-15 19:04:51.919 [info] > git show --textconv HEAD:app.py [3ms]
    2025-04-15 19:04:52.901 [info] > git config --get commit.template [24ms]
    2025-04-15 19:04:52.905 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [5ms]
    2025-04-15 19:04:52.963 [info] > git status -z -uall [31ms]
    2025-04-15 19:04:52.966 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [5ms]
    2025-04-15 19:05:14.752 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [7ms]
    2025-04-15 19:06:46.222 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [6ms]
    2025-04-15 19:07:36.394 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [4ms]
    2025-04-15 19:07:52.178 [info] > git fetch [1297ms]
    2025-04-15 19:07:52.203 [info] > git config --get commit.template [3ms]
    2025-04-15 19:07:52.203 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [27ms]
    2025-04-15 19:07:52.258 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [33ms]
    2025-04-15 19:07:52.260 [info] > git show --textconv HEAD:app.py [4ms]
    2025-04-15 19:07:52.305 [info] > git status -z -uall [19ms]
    2025-04-15 19:07:52.307 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [3ms]
    2025-04-15 19:07:53.344 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [2ms]
    2025-04-15 19:07:53.368 [info] > git show --textconv HEAD:app.py [2ms]
    2025-04-15 19:07:54.361 [info] > git config --get commit.template [2ms]
    2025-04-15 19:07:54.388 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [3ms]
    2025-04-15 19:07:54.453 [info] > git status -z -uall [34ms]
    2025-04-15 19:07:54.456 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [5ms]
    2025-04-15 19:08:04.921 [info] > git config --get commit.template [24ms]
    2025-04-15 19:08:04.924 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [4ms]
    2025-04-15 19:08:04.974 [info] > git status -z -uall [23ms]
    2025-04-15 19:08:05.006 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [33ms]
    2025-04-15 19:08:05.013 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [12ms]
    2025-04-15 19:08:05.048 [info] > git show --textconv HEAD:app.py [6ms]
    2025-04-15 19:08:06.516 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [12ms]
    2025-04-15 19:08:06.567 [info] > git show --textconv HEAD:app.py [8ms]
    2025-04-15 19:08:10.092 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [11ms]
    2025-04-15 19:08:10.228 [info] > git status -z -uall [83ms]
    2025-04-15 19:08:10.228 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [16ms]
    2025-04-15 19:08:10.977 [info] > git check-ignore -v -z --stdin [3ms]
    2025-04-15 19:08:50.118 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [6ms]
    2025-04-15 19:09:03.700 [info] > git merge --continue [4ms]
    2025-04-15 19:09:03.700 [info] error: Committing is not possible because you have unmerged files.
    hint: Fix them up in the work tree, and then use 'git add/rm <file>'
    hint: as appropriate to mark resolution and make a commit.
    fatal: Exiting because of an unresolved conflict.
    2025-04-15 19:09:03.734 [info] > git for-each-ref --format=%(refname)%00%(upstream:short)%00%(objectname)%00%(upstream:track)%00%(upstream:remotename)%00%(upstream:remoteref) refs/heads/main refs/remotes/main [7ms]
    2025-04-15 19:09:03.786 [info] > git status -z -uall [31ms]
    2025-04-15 19:09:03.788 [info] > git for-each-ref --sort -committerdate --format %(refname) %(objectname) %(*objectname) [3ms]
    2025-04-15 19:09:05.548 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [7ms]
    2025-04-15 19:09:18.586 [info] > git ls-tree -l HEAD -- /home/julif/Escritorio/Reportes/app.py [22ms]

    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      mesage: 'accion de crear',
      payload,
    };
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return id;
  }
}
