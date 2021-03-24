name: 聚看点

on:
  workflow_dispatch:
  schedule:
    - cron: '30 8-21 * * *'
  watch:
    types: started
  repository_dispatch:
    types: 聚看点
jobs:
  build:

    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - name: Checkout
        run: |
          git clone https://github.com/wjmdajtw/dc.git ~/scripts
      - name: Use Node.js 10.x
        uses: actions/setup-node@v1
        with:
          node-version: 10.x
      - name: npm install
        run: |
          cd ~/scripts
          npm install
      - name: '运行 【聚看点】'
        run: |
          cd ~/scripts
          node jkd.js
        env:
          JUKAN_BODY: ${{ secrets.JUKAN_BODY }}
          JUKAN_COOKIE: ${{ secrets.JUKAN_COOKIE }}
          
          #微信酱
          PUSH_KEY: ${{ secrets.PUSH_KEY }}
          #BARK推送
          BARK_PUSH: ${{ secrets.BARK_PUSH }}
          BARK_SOUND: ${{ secrets.BARK_SOUND }}
          #tg推送
          TG_BOT_TOKEN: ${{ secrets.TG_BOT_TOKEN }}
          TG_USER_ID: ${{ secrets.TG_USER_ID }}
          #钉钉推送
          DD_BOT_TOKEN: ${{ secrets.DD_BOT_TOKEN }}
          DD_BOT_SECRET: ${{ secrets.DD_BOT_SECRET }}
          #企业微信推送
          QYWX_KEY: ${{ secrets.QYWX_KEY }}
          #iGot推送
          IGOT_PUSH_KEY: ${{ secrets.IGOT_PUSH_KEY }}
          #酷推(Cool Push)推送
          QQ_SKEY: ${{ secrets.QQ_SKEY }}
          QQ_MODE: ${{ secrets.QQ_MODE }}
                    #pushplus推送
          PUSH_PLUS_TOKEN: ${{ secrets.PUSH_PLUS_TOKEN }}
          PUSH_PLUS_USER: ${{ secrets.PUSH_PLUS_USER }}
          #万能推
             
          ALLIN_KEY: ${{ secrets.ALLIN_KEY }} 
          NOTICE_ID: ${{ secrets.NOTICE_ID }}
